import React from "react";
import Popup from "reactjs-popup";

export default function BookActions(props) {
  return (
    <div className="book-actions row">
      <Popup
        trigger={<button className="btn-inline btn-edit">Edit</button>}
        modal
      >
        <h1>Edit Details</h1>
        <p>This feature is coming soon.</p>
      </Popup>

      <button className="btn-inline btn-delete" onClick={props.handleDelete}>
        Delete
      </button>

      <Popup trigger={<button className="btn btn-update">Update</button>} modal>
        <h1>Update Progress</h1>
        <p>This feature is coming soon.</p>
      </Popup>
    </div>
  );
}
