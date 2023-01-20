import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AlbumPhoto() {
  const api = "https://api.unsplash.com/photos/";
  const accessId = process.env.REACT_APP_UNSPLASH_ACESS;
  const { id } = useParams();
  const [photo, setPhoto] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${api}/${id}?client_id=${accessId}`);
      console.log("response", response.data);
      setPhoto(response.data);
    })();
  }, [id]);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        回到上一頁
      </button>
      這是單張圖片{id}
      <p>{photo.description}</p>
      <img src={photo?.urls?.regular} className="img-fluid" alt="" />
    </div>
  );
}
