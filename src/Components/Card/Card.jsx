import "./Card.scss";
import MoreIcon from "../../assets/moreIcon.svg";
const Card = ({ note }) => {
  // Helper to get the card title
  const getTitle = () => {
    if (note?.title) return note.title;
    if (note?.content) {
      const words = note.content.trim().split(/\s+/);
      return words.slice(0, 2).join(" ") + (words.length > 2 ? "..." : "");
    }
    return "";
  };

  return (
    <div className="cardContainer">
      <div className="cardHeader">
        <h2>
          {getTitle()}
        </h2>
        <button className="moreButton">
          <img src={MoreIcon} alt="" />
        </button>
      </div>
      <div className="cardContent">
        <p>{note?.content}</p>
      </div>
    </div>
  );
};

export default Card;
