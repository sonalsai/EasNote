import "./Header.scss";
// import Logo from "../../assets/logo.png"; // Assuming you have a logo image

const Header = () => {
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

      {/* Add Note Button */}
      <div className="addNoteButtonContainer">
        <button className="addNoteButton">Add Note</button>
      </div>
    </div>
  );
};

export default Header;
