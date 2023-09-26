import React from "react";

import { Link } from "react-router-dom";

function BollywoodThelatest(props) {
  const token=localStorage.getItem("token")
  console.log("this is bolywood the latest",props.data);

  return (
    <>
      <h1 className="bolywood_thelatest">The Latest</h1>

      <div className="the_latest">
        {props.data 
          .filter((item) => item.categorey === "News")
          .map((data, index) => {
            return (
              <div className="the_latest_image" key={data.id}>
               {token?<Link to={data.path}>
                  <img
                    src={data.urlToImage}
                    className="bolywood_thelatest_front"
                    alt="the_latest"
                    style={{
                    
                    }}
                    
                  />
                </Link>:<Link to='/signuppage'>
                  <img
                    src={data.urlToImage}
                    alt="the_latest"
                    style={{
                      width: "300px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    className="img"
                  />
                </Link>}

                <p>{data.title}</p>
                <p>{data.publishedAt}</p>
              </div>
            );
          })}


      </div>
    </>
  );
}
export default BollywoodThelatest