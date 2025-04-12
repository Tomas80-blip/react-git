import React from "react";

function Profilis(props) {
    return (
      <div>
        <h2>Profilis</h2>
        <p>{props.vardai}</p>
        <p>{props.pomegiai}</p>
      </div>
    );
}

export default Profilis;

