import React, { useEffect, useState } from "react";

const Backend = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  return (
    <div className="container">
      <div className="users-info">
        {data.map((el) => (
          <div key={el.id} className="wrapper">
            <i className="text">{el.body}</i>
            <div className="info">
              <h4 className="title">{el.name}</h4>
              <a className="email" href={`mailto:${el.email}`}>{el.email}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backend;
