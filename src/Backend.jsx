import React, { useEffect, useState } from "react";
import Users from "./companents/Users";

// import Comments from "./companents/Comments";

const Backend = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  return (
    <div className="container">
      <Users {...data} />
    </div>
  );
};

export default Backend;
