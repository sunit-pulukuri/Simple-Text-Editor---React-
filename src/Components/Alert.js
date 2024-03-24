import React from "react";

export default function Alert(props) {
  return (
    props.alerts && (
      <div
        className={`alert alert-${props.alerts.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alerts.type}</strong>: {props.alerts.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
