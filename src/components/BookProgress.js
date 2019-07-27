import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Popup from 'reactjs-popup';

function BookProgress(props) {
  const percentage = ((props.currentPages / props.totalPages)*100).toFixed(1);
  return(
    <div className="book-progress">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}
      />
      <Popup trigger={<button className="btn">Update</button>} modal>
        <h1>Update</h1>
      </Popup>
    </div>
  );
}

export default BookProgress;