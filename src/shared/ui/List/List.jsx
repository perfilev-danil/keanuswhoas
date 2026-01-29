import "./List.css";
import { useState, useEffect, useRef } from "react";
import VideoCard from "../VideoCard/VideoCard";

const List = ({ items }) => {
  const listRef = useRef(null);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const checkScroll = () => {
      setHasScroll(el.scrollHeight > el.clientHeight);
    };

    const observer = new ResizeObserver(checkScroll);

    observer.observe(el);

    checkScroll();

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className={`list ${hasScroll ? "has-scroll" : ""}`} ref={listRef}>
      {items.map((item) => (
        <VideoCard key={`${item.video["360p"]}`} item={item} />
      ))}
    </div>
  );
};

export default List;
