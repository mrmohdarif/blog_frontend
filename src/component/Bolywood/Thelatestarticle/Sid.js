import React from "react";

import { useNavigate } from "react-router-dom";

function Sid(props) {

  const back = useNavigate();
 
  return (
    <div className="papaya_main_div">
      {props.value
        .filter(
          (item) =>
            item.categorey === "The Latest Article" &&
            item.name === "Bollywood" &&
            item.path === "/sid"
        )
        .map((data, index) => {
          return (
            <div className="papaya_sub">
              <h1>{data.title}</h1>
              <span style={{ fontSize: "18px", fontStyle: "italic" }}>
                {data.description}
              </span>
              <img
                src={data.urlToImage}
                alt="the_latest_Javan"
                style={{  }}
                className='actres'
              />
              <p>{data.content}</p>
              <button
                className="backbtn_article"
                onClick={() => {
                  back(-1);
                }}
              >
                Back
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Sid;
