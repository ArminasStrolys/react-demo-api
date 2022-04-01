import React from "react";

const Food = (props) => {
  return (
    <>
      <div className="ui raised very padded text container segment">
        <div className="ui centered card">
          <div className="image">
            <img src="/images/avatar2/large/kristy.png" alt="" />
          </div>
          <div className="content">
            <p className="header">{props.dish}</p>
            <div className="meta"></div>
            <div className="description">{props.desc}</div>
          </div>
          <div className="extra content">
            <p>
              {props.ing} | <b>{props.mes}</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
