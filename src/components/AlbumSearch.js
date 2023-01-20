import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AlbumSearch() {
  const [list, setList] = useState([]);
  const api = "https://api.unsplash.com/search/photos/";
  const accessId = process.env.REACT_APP_UNSPLASH_ACESS;
  const [search, setSearch] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${api}?client_id=${accessId}&query=${search}`
      );
      const { results } = response.data;
      console.log(results);
      setList(results);
    })();
  }, [search]);

  return (
    <div>
      這是搜尋頁面{search}
      <input
        type="text"
        className="form-control"
        defaultValue={search}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            setSearch(e.target.value);
          }
        }}
      />
      {list.map((item) => {
        return (
          <li key={item.id}>
            {/* */}
            <Link to={`/album/${item.id}`}>{item.id}</Link>
          </li>
        );
      })}
    </div>
  );
}
