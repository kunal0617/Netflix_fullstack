import { Visibility } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./widgetSm.css";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTQ2Nzk1Nzk4OGM2M2JiMGFlZDY5ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzQyMzk2NCwiZXhwIjoxNjM0Mjg3OTY0fQ.l_kgLuA34jvgfF7eRt_tdYSbjZONUJBTRP4q6e24iGk",
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li key={user.id} className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
