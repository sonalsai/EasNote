import "./Header.scss";
// import Logo from "../../assets/logo.png";
import AddNotesIcon from "../../assets/addNotesIcon.svg";
import AllNotesIcon from "../../assets/allNotesIcon.svg";
import FavoriteNoteIcon from "../../assets/favoriteNoteIcon.svg";
import LockedNoteIcon from "../../assets/lockedNoteIcon.svg";
import DeleteIcon from "../../assets/deleteIcon.svg";

const Header = ({ setShowAddNoteForm }) => {
  return (
    <div className="headerContainer">
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
        <button className="noteOptionButton">
          <img src={AllNotesIcon} alt="" />
          All Notes
        </button>
        <button className="noteOptionButton">
          <img src={FavoriteNoteIcon} alt="" />
          Favorites Notes
        </button>
        <button className="noteOptionButton">
          <img src={LockedNoteIcon} alt="" />
          Locked Notes
        </button>
        <button className="noteOptionButton">
          <img src={DeleteIcon} alt="" />
          Recycle Bin</button>
      </div>

      {/* Add Note Button */}
      <div className="addNoteButtonContainer">
        <button
          className="addNoteButton"
          onClick={() => setShowAddNoteForm(true)}
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
