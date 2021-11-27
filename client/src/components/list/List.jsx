import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

export default function List({ list }) {
  //so that we can't go beyond 0th card and last card while sliding
  const [slideNumber, setSlideNumber] = useState(0);
  //if moved right then left arrow appears
  const [isMoved, setIsMoved] = useState(false);

  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  //for sliding using useRef to move left and right
  const listRef = useRef();
  //on click change style of cards
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  console.log(list);
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slideArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, idx) => (
            // eslint-disable-next-line react/jsx-key
            <ListItem index={idx} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="slideArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
