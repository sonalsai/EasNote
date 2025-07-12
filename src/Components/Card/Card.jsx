import "./Card.scss";
const Card = () => {
  return (
    <div className="cardContainer">
      <div className="cardHeader">
        <h2>My Note Title</h2>
      </div>
      <div className="cardContent">
        <p>
          This is a sample note content. You can edit or delete this note. This
          is a sample note content. 
          You can edit or delete this note.This is a
          sample note content. You can edit or delete this note.This is a sample
          note content. You can edit or delete this note.This is a sample note
          content. You can edit or delete this note.Thi
          s is a sample note
          content. You can edit or delete this note.This is a sample note
          content. You can edit or delete this note.This is a sample note
          content. You can edit or delete this note.
        </p>
      </div>
    </div>
  );
};

export default Card;
