import React, { useState } from "react";

function DeckForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const handleNameChange = (event) => setName(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");
      };

    return (
        <form onSubmit={handleSubmit}>
            <div>
          <label htmlFor="name">
                <p>Name</p>
                <input
                id="name"
                type="text"
                name="name"
                onChange={handleNameChange}
                value={name}
                />
            </label>
          </div>
          <div>
            <label htmlFor="decsription">
                <p>Description</p>
                <textarea 
                    id="description" 
                    type="description" 
                    name="description"
                    rows="5"
                    cols="50"
                    onChange={handleDescriptionChange} 
                    value={description}
                />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      );
}

export default DeckForm;