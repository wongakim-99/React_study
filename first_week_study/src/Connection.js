import React, { useEffect, useState } from "react";
import axios from "axios";

const Connection = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:8080");
    setData(data);
  };
  axios.get();

  return (
    <div>
      <div>응답 데이터</div>
      {data}
    </div>
  );
};

export default Connection;
