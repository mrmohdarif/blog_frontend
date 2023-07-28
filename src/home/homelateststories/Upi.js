import React from 'react'
import { useNavigate } from 'react-router-dom';


function Upi(props) {
  
  const back = useNavigate();
  return (
    <div className="papaya_main_div">
      {props.value
        .filter(
          (item) =>
            item.categorey === "Latest Stories" &&
            item.name === "homepage" &&
            item.path === "/upi"
        )
        .map((data, index) => {
          return (
            <div className="papaya_sub">
              <h1>{data.heading}</h1>
              <span style={{ fontSize: 18, fontStyle: "italic" }}>
                {data.description}
              </span>
              <img
                src={data.img}
                alt="the_latest_Javan"
                style={{ }}
                className='food_article'
              /> 
              <p style={{ lineHeight: "1.5" }}>{data.text}</p>
              <button
                className="backbtn_upi"
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

export default Upi