import { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Home.scss";
import AddNoteForm from "../../Components/AddNoteForm/AddNoteForm";
import Card from "../../Components/Card/Card";
const Home = () => {
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  let cardCount = 15;
  return (
    <div className="homeContainer">
      {/* Header Division */}
      <div className="HeaderDivision">
        <Header setShowAddNoteForm={setShowAddNoteForm} />
      </div>

      <AddNoteForm
        showAddNoteForm={showAddNoteForm}
        setShowAddNoteForm={setShowAddNoteForm}
      />

      {/* Note Container Division */}
      <div className="noteContainer">
        {
          // Dynamically render cards based on cardCount
          Array.from({ length: cardCount }, (_, index) => (
            <Card key={index} />
          ))
        }
      </div>
    </div>
  );
};

export default Home;
