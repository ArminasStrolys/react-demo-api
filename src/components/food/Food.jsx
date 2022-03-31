import React from "react";

const Food = (props) => {

  return (
    <>
      <div className="ui raised very padded text container segment">
        <div className="ui card">
          <div className="image">
            <img src="/images/avatar2/large/kristy.png" alt="" />
          </div>
          <div className="content">
            <p className="header">HI{props.dish}</p>
            <div className="meta">
              <span className="date">Joined in 2013</span>
            </div>
            <div className="description">
              Kristy is an art director living in New York.
            </div>
          </div>
          <div className="extra content">
            <a>
              <i className="user icon"></i>
              22 Friends
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
