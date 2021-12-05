import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");

  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      <BrowserRouter>
        <NavBar ToggleMode={ToggleMode} mode={mode} />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
                sourcecolor="danger"
              />
            }
          />
          {/* <Route
              exact
              path="/about"
              element={
                <News mode = {mode} 
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="about"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                  sourcecolor="danger"
                />
              }
            /> */}
          <Route
            exact
            path="/business"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
                sourcecolor="warning"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
                sourcecolor="primary"
              />
            }
          />
          {/* <Route
              exact
              path="/general"
              element={
                <News mode = {mode} 
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                  sourcecolor="danger"
                />
              }
            /> */}
          <Route
            exact
            path="/health"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
                sourcecolor="success"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
                sourcecolor="info"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
                sourcecolor="secondary"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
                sourcecolor="#ff6600"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
