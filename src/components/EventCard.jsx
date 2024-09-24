import React from "react";

const EventCard = (props) => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="eventCardClass">
      <h2 className="name">{props.name}</h2>
      <h3 className="description"> {props.description}</h3>
      <h4>{props.location}</h4>
      <img className="eventImage" src={props.eventImage} alt="Event Image" />
      <div className="button">
        <button onClick={() => handleClick(props.source)}>Got To Source</button>
      </div>
    </div>
  );
};

export default EventCard;
