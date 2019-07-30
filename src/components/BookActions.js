import React from "react";
import Popup from "reactjs-popup";
import EditBookForm from "./EditBookForm";

export default function BookActions(props) {
  return (
    <div className="book-actions row">
      <div style={{ flex: 1 }} />
      
      <div style={{ display: "flex", flex: 3, padding: 10 }}>
        <Popup
          trigger={<button className="btn-inline btn-edit">Edit</button>}
          modal
        >
          <div className="edit-popup-content">
            <EditBookForm
              data={props.data}
              handleUpdate={props.handleUpdate}
            />
          </div>
        </Popup>

        <button className="btn-inline btn-delete" onClick={props.handleDelete}>
          Delete
        </button>
      </div>

      <div style={{ flex: 1, textAlign: "center", padding: 10 }}>
        <Popup
          trigger={<button className="btn btn-update">Update</button>}
          modal
        >
          <div className="update-popup-content">
            <h1>Update Progress</h1>
            <p>This feature is coming soon.</p>
          </div>
        </Popup>
      </div>
    </div>
  );
}
