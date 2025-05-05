import { useEffect } from "react";

export const Post = ({ data, setPageNo }) => {
  useEffect(() => {
    const lastImg = document.querySelector(".image-post:last-child");

    const observer = new IntersectionObserver(
      (param) => {
        if (param[0].isIntersecting) {
          observer.unobserve(lastImg);
          setPageNo((pageNo) => pageNo + 1);
        }
      },
      { threshold: 0.5 }
    );

    if (!lastImg) {
      return;
    }
    observer.observe(lastImg);

    return () => {
      if (lastImg) {
        observer.unobserve(lastImg);
      }
      observer.disconnect();
    };
  }, [data]);

  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <img className="image-post" key={item.id} src={item.download_url} />
        );
      })}
    </div>
  );
};
