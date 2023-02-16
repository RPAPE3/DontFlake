import React from "react";
// import { Link } from 'react-router-dom';

<<<<<<< HEAD
const UserEventsFeed = ({
  events,
}) => {
    if (!events.length) {
    return <h3 style={{color: 'black', backgroundColor: '#979dac', marginBottom: '0px', fontFamily: 'roboto', border: '1px solid grey'}}>no events</h3>;
    }
    return (
=======
const UserEventsFeed = ({ events }) => {
  if (!events.length) {
    return <h3>No event's here!</h3>;
  }
  return (
>>>>>>> 355f3a0c2dfc3cb921f76d683557a0497c72e063
    <>
    {events &&
        events.map((event) => (
            <div
            key={event._id}
<<<<<<< HEAD
            className="card text-center"
            style={{ width: "75%", marginLeft: "12%" }}
            >
=======
            className="card text-center mt-3"
            style={{
              width: "80%",
              marginLeft: "11%",
              marginBottom: "15px",
              boxShadow: "5px 5px black",
            }}
          >
>>>>>>> 355f3a0c2dfc3cb921f76d683557a0497c72e063
            <div className="card-header">
            <h2>Event: {event.title} </h2>
            </div>
            <div className="card-body">
            <h5 className="card-title">Date: {event.date}</h5>
            <p className="card-text">Description: {event.description}</p>
            <p>Address: {event.address}</p>
            </div>
            <div className="card-footer text-muted">
              Owner: {event.eventAuthor} // Creation Date: {event.createdAt}
            </div>
            </div>
        ))}
    </>
    );
};

export default UserEventsFeed;
