import "./Header.scss";
// import Logo from "../../assets/logo.png";
import addNotesIcon from "../../assets/addNotesIcon.svg";
import allNotesIcon from "../../assets/allNotesIcon.svg";
import favoriteNoteIcon from "../../assets/favoriteNoteIcon.svg";
import lockedNoteIcon from "../../assets/lockedNoteIcon.svg";
import deleteIcon from "../../assets/deleteIcon.svg";

const Header = ({ setShowAddNoteForm }) => {
  return (
    <div className="headerContainer">
      {/* Title */}
      <div className="titleContainer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055642.png"
          alt="EasNote Logo"
          className="headerLogo"
        />
        <div className="textContainer">
          <h1 className="headerTitle">EasNote</h1>
          <span className="headerSubtitle">Your Easy Note-Taking App</span>
        </div>
      </div>

      {/* Note Options */}
      <div className="noteOptionsContainer">
        <button className="noteOptionButton">
          <img src={allNotesIcon} alt="" />
          All Notes
        </button>
        <button className="noteOptionButton">
          <img src={favoriteNoteIcon} alt="" />
          Favorites Notes
        </button>
        <button className="noteOptionButton">
          <img src={lockedNoteIcon} alt="" />
          Locked Notes
        </button>
        <button className="noteOptionButton">
          <img src={deleteIcon} alt="" />
          Recycle Bin</button>
      </div>

      {/* Add Note Button */}
      <div className="addNoteButtonContainer">
        <button
          className="addNoteButton"
          onClick={() => setShowAddNoteForm(true)}
        >
          {" "}
          <img src={addNotesIcon} alt="" className="addNoteIcon" />
          Add Note
        </button>
      </div>
    </div>
  );
};

export default Header;
