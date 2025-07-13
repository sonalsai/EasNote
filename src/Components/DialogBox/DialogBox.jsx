import "./DialogBox.scss";
import closeIcon from "../../assets/closeIcon.svg";

const DialogBox = () => {
  return (
    <div className="dialogBoxContainer">
      {/* Dialog Box Structure */}
      <div className="dialogBox">
        {/* Header */}
        <div className="header">
          <h2>Dialog Title</h2>
          <button>
            <img src={closeIcon} alt="" />
          </button>
        </div>

        {/* Content */}
        <div className="dialogContent">
          <p>
            This is the content of the dialog box. You can add any information
            or form here.
          </p>
        </div>

        {/* Actions */}
        <div className="dialogActions">
          <button className="cancelBtn">Cancel</button>
          <button className="confirmBtn">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
