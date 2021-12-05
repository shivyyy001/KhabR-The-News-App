import React from "react";
import './NewsItem.css';
const NewsItem = (props) => {
  let {
    mode,
    title,
    description,
    imageUrl,
    newsUrl,
    author,
    date,
    source,
    sourcecolor,
  } = props;

  return (
    <div className="my-3">
      <div className={`card bg-${mode}`} style={{boxShadow: `0px 0px 5px 0px ${mode==='dark'?'white':'black'}`} }>
        <span
          className={`position-absolute top-0 start-50 translate-middle badge rounded-pill bg-${sourcecolor}`}
          style={{ backgroundColor: `${sourcecolor}` }}
        >
          {source}
        </span>
        <img
          style={{ height: "250px" }}
          src={
            imageUrl
              ? imageUrl
              : "https://media.istockphoto.com/vectors/breaking-news-banner-template-breaking-news-background-for-lower-vector-id1193558441?k=20&m=1193558441&s=612x612&w=0&h=w-x3ATLKY06qMTWS6QQxPZTE55iu_D0QZonb53xLyfU="
          }
          className="card-img-top"
          alt="news"
        />
        <div className="card-body">
          <h5 className={`card-title text-${mode==='dark'?'light':'dark'}`}>{(title && title.length)>60?title.substr(0,60):title}...</h5>
          <p className={`card-text text-${mode==='dark'?'light':'dark'}`}>{(description && description.length)>50?description.substr(0,50):description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toUTCString()}
            </small>
          </p>
          <div className="d-flex justify-content-end">
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className={`btn btn-${mode==='dark'?'light':'dark'} btn-sm`}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
