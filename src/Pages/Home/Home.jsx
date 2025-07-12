import { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Home.scss";
import AddNoteForm from "../../Components/AddNoteForm/AddNoteForm";
import Card from "../../Components/Card/Card";
const Home = () => {
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
