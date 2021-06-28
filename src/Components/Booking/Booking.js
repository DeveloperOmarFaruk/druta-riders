import React, { useContext } from "react";
import { UserContext } from "../../App";

const Booking = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <>
      <div className="destination-container">
        <div className="destination-left-container">
          <h3 style={{ textAlign: "center", color: "green" }}>
            Successfully, Booking... Mr./Ms.{" "}
            {loggedInUser.displayName || loggedInUser.name}
          </h3>
          <br />
          <h3 style={{ textAlign: "center", color: "tomato" }}>
            {loggedInUser.email}
          </h3>
          <br />
          <br />
          <br />
          <br />

          <button
            to="/login"
            className="cta-btn"
            onClick={() => setLoggedInUser({})}
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Booking;
