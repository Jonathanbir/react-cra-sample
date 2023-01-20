import { useOutletContext } from "react-router-dom";
import List from "./List";

export default function AlbumIndex() {
  const list = useOutletContext();
  return (
    <div>
      這是相簿的首頁
      <List list={list} />
    </div>
  );
}
