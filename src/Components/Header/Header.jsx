import "./Header.scss";
import { HeaderOptions } from "../../enums";
// import Logo from "../../assets/logo.png";
import AddNotesIcon from "../../assets/addNotesIcon.svg";
import AllNotesIcon from "../../assets/allNotesIcon.svg";
import FavoriteNoteIcon from "../../assets/favoriteNoteIcon.svg";
import LockedNoteIcon from "../../assets/lockedNoteIcon.svg";
import DeleteIcon from "../../assets/deleteIcon.svg";

const Header = ({ setShowAddNoteForm, setScreenType, setIsHeaderVisible }) => {
  const handleOptionClick = (screenType) => {
    setScreenType(screenType);
    if (setIsHeaderVisible) {
      setIsHeaderVisible(false);
    }
  };

  return (
    <div className="headerContainer">
      <div className="topContainer">
        {/* Title */}
        <div className="titleContainer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055642.png"
            alt="EazNote Logo"
            className="headerLogo"
          />
          <div className="textContainer">
            <h1 className="headerTitle">EazNote</h1>
            <span className="headerSubtitle">Your Easy Note-Taking App</span>
          </div>
        </div>

        {/* Note Options */}
        <div className="noteOptionsContainer">
          <button
            className="noteOptionButton"
            onClick={() => handleOptionClick(HeaderOptions.ALL_NOTES)}
          >
            <img src={AllNotesIcon} alt="" />
            {HeaderOptions.ALL_NOTES}
          </button>
          <button
            className="noteOptionButton"
            onClick={() => handleOptionClick(HeaderOptions.FAVORITES)}
          >
            <img src={FavoriteNoteIcon} alt="" />
            {HeaderOptions.FAVORITES}
          </button>
          <button
            className="noteOptionButton"
            onClick={() => handleOptionClick(HeaderOptions.LOCKED)}
          >
            <img src={LockedNoteIcon} alt="" />
            {HeaderOptions.LOCKED}
          </button>
          <button
            className="noteOptionButton"
            onClick={() => handleOptionClick(HeaderOptions.RECYCLE_BIN)}
          >
            <img src={DeleteIcon} alt="" />
            {HeaderOptions.RECYCLE_BIN}
          </button>
        </div>
      </div>

      {/* Add Note Button */}
      <div className="addNoteButtonContainer">
        <button
          className="addNoteButton"
          onClick={() => {
            setShowAddNoteForm(true);
            if (setIsHeaderVisible) {
              setIsHeaderVisible(false);
            }
          }}
        >
          {" "}
          <img src={AddNotesIcon} alt="" className="addNoteIcon" />
          Add Note
        </button>
      </div>
    </div>
  );
};

export default Header;
