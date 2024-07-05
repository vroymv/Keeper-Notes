import React, { useState } from "react";

function Createnote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  

  function handleChange(e, value) {
    if (e === "title") {
      setNote(() => {
        return {
          ...note,
          title: value,
        };
      });
    } else {
      setNote(() => {
        return {
          ...note,
          content: value
        };
      });
    }
  }

  function addNote(e) {
    props.addToArray(note);
    setNote(() => {
      return {
        title: "",
        content: ""
      };
    });
    e.preventDefault();
  }
  
  return (
    <div>
      <form onSubmit={(e) => addNote(e)}>
        <input
          name="title"
          placeholder="Title"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Createnote;
