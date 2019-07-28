import React from 'react';
import Popup from 'reactjs-popup';

export default function BookActions(props) {
  return(
    <div className="book-actions row">
      <Popup trigger={<button className="btn-inline btn-edit">Edit</button>} modal>
        <h1>Edit Details</h1>
      </Popup>

      <Popup trigger={<button className="btn-inline btn-delete">Delete</button>} modal>
        <h1>Delete</h1>
      </Popup>

      <Popup trigger={<button className="btn btn-update">Update</button>} modal>
        <h1>Update Progress</h1>
      </Popup>
    </div>
  )
}