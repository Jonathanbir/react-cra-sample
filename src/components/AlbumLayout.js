import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import List from "./List";

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
  }, [accessId]);

  return (
    <div className="row">
      <div className="col-4">
        左側選單列表
        <p>
          <Link to="search">搜尋頁面</Link>
        </p>
        <List list={list} />
      </div>
      <div className="col-8">
        <Outlet context={list} />
      </div>
    </div>
  );
}
