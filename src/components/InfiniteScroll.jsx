import { useEffect, useState } from "react";
import { Post } from "./Post";

export const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const arr = fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setData((oldData) => [...oldData, ...arr]);
      });
  }, [pageNo]);

  return (
    <>
      <Post data={data} setPageNo={setPageNo} />
    </>
  );
};
