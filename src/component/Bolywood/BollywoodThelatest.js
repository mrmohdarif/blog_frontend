import React from "react";

import { Link } from "react-router-dom";

function BollywoodThelatest(props) {
  const token=localStorage.getItem("token")
  console.log("this is bolywood the latest",props.data);

  return (
    <>
      <h1>The Latest</h1>

      <div className="the_latest">
        {props.data 
          .filter((item) => item.categorey === "News")
          .map((data, index) => {
            return (
              <div className="the_latest_image" key={data.id}>
               {token?<Link to={data.path}>
                  <img
                    src={data.urlToImage}
                    alt="the_latest"
                    style={{
                      width: "auto",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    className="img"
                  />
                </Link>:<Link to='/signuppage'>
                  <img
                    src={data.urlToImage}
                    alt="the_latest"
                    style={{
                      width: "auto",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    className="img"
                  />
                </Link>}

                <h3>{data.title}</h3>
                <p>{data.publishedAt}</p>
              </div>
            );
          })}


      </div>
    </>
  );
}
export default BollywoodThelatest