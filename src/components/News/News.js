import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Button from "../Button/Button";
import Spinner from "../Spinner";
import PropTypes from "prop-types";
import "./News.css";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageno, setPageno] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const callApi = async (pn) => {
    props.setProgress(20);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pn}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(75);
    //console.log(parsedData);

    setArticles(parsedData.articles);
    setPageno(pn);
    settotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `KHAB₹ - ${capitalizeFirstLetter(props.category)}`;
    callApi(pageno);
    // eslint-disable-next-line
  }, []);

  const handleNextClick = () => {
    if (pageno + 1 <= Math.ceil(totalResults / props.pageSize)) {
      callApi(pageno + 1);
    }
    console.log(pageno);
  };

  const handlePrevClick = () => {
    callApi(pageno - 1);
    console.log(pageno);
  };

  return (
    <div className="container my-3">
      <h1
        className="text-center blink_me"
        style={{
          margin: "28px",
          fontFamily: "'Lobster', cursive",
          color: "#8d1738",
          marginTop: "80px",
          textShadow: `1px 1px 2px ${
            props.mode === "dark" ? "white" : "black"
          }`,
        }}
      >
        KHAB₹ - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner mode={props.mode} />}

      <div className="row">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4 col-sm-6" key={element.url}>
                <NewsItem
                  mode={props.mode}
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                  sourcecolor={props.sourcecolor}
                />
              </div>
            );
          })}
      </div>
      <div
        className="container d-flex justify-content-between"
        style={{ marginTop: "40px" }}
      >
        <Button
          disabled={pageno <= 1}
          type="button"
          className={`btn btn-${props.mode === "dark" ? "light" : "dark"}`}
          title="&laquo; Previous"
          clickHandler={handlePrevClick}
          display={loading ? "none" : "block"}
        />
        <Button
          disabled={pageno + 1 > Math.ceil(totalResults / props.pageSize)}
          type="button"
          className={`btn btn-${props.mode === "dark" ? "light" : "dark"}`}
          title="Next &raquo;"
          clickHandler={handleNextClick}
          display={loading ? "none" : "block"}
        />
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
