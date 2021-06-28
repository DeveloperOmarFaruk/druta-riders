import React, { useContext } from "react";
import { UserContext } from "../../App";

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <>
      <div className="destination-container">
        <div className="destination-left-container">
          <h3 style={{ textAlign: "center", color: "tomato" }}>
            Mr./Ms. {loggedInUser.displayName || loggedInUser.name}
          </h3>
          <br />
          <h3 style={{ textAlign: "center", color: "tomato" }}>
            {loggedInUser.email}
          </h3>
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

export default Profile;
