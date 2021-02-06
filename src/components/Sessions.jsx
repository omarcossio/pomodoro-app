import React, { useState } from "react";
import moment from "moment";

const Session = () => {
    const [sessionLength, setSessionLength] = useState(300)

    const decrementByOneMin = () => {
        const newSessionLength = sessionLength - 60;

        if (newSessionLength < 0) {
            setSessionLength(0);
        } else {
            setSessionLength(newSessionLength);
        }
    };

    const incrementByOneMin = () => {
        setSessionLength(sessionLength + 60);
    }

    const timeToMins = moment.duration(sessionLength, 's').minutes();

    return(
        <div>
            <p id="session-label">Session</p>
            <p id="session-length">{timeToMins}</p>
            <button id="session-decrement" onClick={decrementByOneMin}>-</button>
            <button id="session-increment" onClick={incrementByOneMin}>+</button>
        </div>
    );
}

export default Session;