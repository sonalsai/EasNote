import { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Home.scss";
import AddNoteForm from "../../Components/AddNoteForm/AddNoteForm";
const Home = () => {
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);

  return (
    <div className="homeContainer">
      <Header setShowAddNoteForm={setShowAddNoteForm} />

      {showAddNoteForm && (
        <AddNoteForm setShowAddNoteForm={setShowAddNoteForm} />
      )}
    </div>
  );
};

export default Home;
