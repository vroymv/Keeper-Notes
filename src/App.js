import Header from "./Header"
import Footer from "./Footer"
import Createnote from "./Createnote";
import Note from "./Note";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  console.log(notes);

  function addNote(newNote) {
    setNotes((prev)=>{
      return(
        [...prev, newNote]
      )
    })
  }

  return (
    <div className="App">
      <Header></Header>
      <Createnote 
        addToArray={addNote}
       />
      
      {
        notes.map((note, index)=> {
          return(
            <Note key={index} title={note.title} content={note.content}/>
          )
        })
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
