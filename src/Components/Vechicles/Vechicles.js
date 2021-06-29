import React, { useState, useContext } from "react";
import { FakeData } from "../FakeData/FakeData";
import { useHistory } from "react-router-dom";
import "./Vechicles.css";
import { UserContext } from "../../App";

const Vechicles = () => {
  const [ticket, setTicket] = useState(FakeData);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();

  const onTicketHandle = (data) => {
    setTicket();
    setLoggedInUser(data);
    history.push("/destination");
    console.log(data);
  };

  // useEffect(() => {
  //   const value = localStorage.getItem("loggedInUser");
  //   if (value) {
  //     setLoggedInUser(JSON.parse(value));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  // }, [loggedInUser]);

  return (
    <>
      <div className="main-section">
        {ticket.map((item) => (
          <div
            className="card"
            key={item.key}
            onClick={() => onTicketHandle(item)}
          >
            <img src={item.image} alt={item.image} className="card-image" />
            <h3 className="card-name">{item.user}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Vechicles;
