import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

export default function AlbumLayout() {
  const [list, setList] = useState([]);
  const api = "https://api.unsplash.com/search/photos/";
  const accessId = process.env.REACT_APP_UNSPLASH_ACESS;
  //   console.log(api, accessId);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${api}?client_id=${accessId}&query=animal`
      );
      const { results } = response.data;
      //   console.log(results);
      setList(results);
    })();
  }, []);

  return (
    <div className="row">
      <div className="col-4">
        左側選單列表
        {list.map((item) => {
          return <li key={item.id}>{item.id}</li>;
        })}
      </div>
      <div className="col-8">
        <Outlet context={list} />
      </div>
    </div>
  );
}
