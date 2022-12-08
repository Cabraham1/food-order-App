import React from "react";
import reactDom from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  // helper for local javascript api
  const PortalElement = document.getElementById("overlays");
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <BackDrop onClose={props.onClose} />,
        PortalElement
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
