import React from "react";
import "./style.css";

const Comments = ({ info }) => {
  return (
    <div className="container">
      {/* <div className="users-info"> */}
      {info?.map((el) => (
        <img src={el.url} alt={el.title} />
        //   <div key={el.id} className="wrapper">
        //     <i className="text">{el.body}</i>
        //     <div className="info">
        //       <h4 className="title">{el.name}</h4>
        //       <a className="email" href={`mailto:${el.email}`}>
        //         {el.email}
        //       </a>
        //     </div>
        //   </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Comments;
