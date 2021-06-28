import React, { useState, useContext } from "react";
import "./Destination.css";
import { UserContext } from "../../App";
import Map from "./Map";
import User from "../../Images/peopleicon.png";
import Bike from "../../Images/Frame.png";
import { useHistory } from "react-router-dom";

const Destination = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [newFrom, setNewFrom] = useState(false);
  const [from, setFrom] = useState({
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    const newFrom = { ...from };
    newFrom[e.target.name] = e.target.value;
    setFrom(newFrom);
  };

  const onSubmit = (e) => {
    setNewFrom(from);
    e.preventDefault();
  };

  const history = useHistory();

  const onHandleBooking = () => {
    history.push("/booking");
  };

  return (
    <>
      <div className="destination-container">
        <div className="destination-left-container">
          {newFrom ? (
            <div>
              <div className="search-result">
                <li className="li">{from.from}</li>
                <li className="li">{from.to}</li>
              </div>
              <div className="search-info">
                {!loggedInUser.image ? (
                  <img src={Bike} alt={Bike} className="search-image" />
                ) : (
                  <img
                    src={loggedInUser.image}
                    alt={loggedInUser.image}
                    className="search-image"
                  />
                )}

                {!loggedInUser.user ? (
                  <h3 className="name">Bike</h3>
                ) : (
                  <h3 className="name">{loggedInUser.user}</h3>
                )}

                <img src={User} alt={User} className="search-user-image" />

                {!loggedInUser.count ? (
                  <h3 className="count">2</h3>
                ) : (
                  <h3 className="count">{loggedInUser.count}</h3>
                )}

                {!loggedInUser.price ? (
                  <h3 className="price">$ 67</h3>
                ) : (
                  <h3 className="price">{loggedInUser.price}</h3>
                )}
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <button
                to="/login"
                className="search-btn"
                onClick={() => onHandleBooking()}
              >
                Booking Now
              </button>
            </div>
          ) : (
            <div className="input-container">
              <form onSubmit={onSubmit}>
                <label htmlFor="#">Pick From</label>
                <br />
                <input
                  type="text"
                  placeholder="From"
                  name="from"
                  required
                  onBlur={handleChange}
                />
                <br />
                <label htmlFor="#">Pick To</label>
                <br />
                <input
                  type="text"
                  placeholder="To"
                  name="to"
                  required
                  onBlur={handleChange}
                />
                <br />

                <input type="submit" value="Search" className="search-btn" />
              </form>
            </div>
          )}
        </div>

        <div className="destination-right-container">
          <Map />
        </div>
      </div>
    </>
  );
};

export default Destination;
