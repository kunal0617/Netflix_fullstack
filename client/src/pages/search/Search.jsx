import "./search.scss";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import CardItem from "../../components/cardItem/CardItem";
import { useLocation } from "react-router";

export default function Search() {
  const [content, setContent] = useState([]);
  const url = window.location.pathname.slice(7);
  const location = useLocation();
  useEffect(() => {
    const getRandomContent = async () => {
      console.log(url);
      try {
        const res = await axios.get(`/search${url}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });

        setContent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [location]);
  //console.log(content.length);
  let size = content.length;
  return (
    <>
      <div className="searching">
        <Navbar />
        <div className="cont">
          <div className="ts"> Based on your search : {url.slice(1)}</div>

          <div className="list">
            {content.map((contents, idx) => (
              // eslint-disable-next-line react/jsx-key
              <CardItem index={idx} item={contents._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
