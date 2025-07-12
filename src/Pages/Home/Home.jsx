import { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Home.scss";
import AddNoteForm from "../../Components/AddNoteForm/AddNoteForm";
const Home = () => {
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);

  return (
    <div className="homeContainer">
      <Header setShowAddNoteForm={setShowAddNoteForm} />

      <AddNoteForm
        showAddNoteForm={showAddNoteForm}
        setShowAddNoteForm={setShowAddNoteForm}
      />
    </div>
  );
};

export default Home;
