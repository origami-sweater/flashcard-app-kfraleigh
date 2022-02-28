import React, { useState } from "react";
import CancelButton from "./CancelButton";
import DescriptionField from "./DescriptionField";
import SubmitDeckButton from "./SubmitDeckButton";

function DeckForm({ apiDeck }) {
    const [formName, setFormName] = useState("");
    const [formDescription, setFormDescription] = useState(apiDeck.description);

    const handleNameChange = (event) => setFormName(event.target.value);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");
      };

    return (
        <form onSubmit={handleSubmit}>
            <div>
          <label htmlFor="formName">
                <p>Name</p>
                <input
                    id="formName"
                    type="text"
                    formName="formName"
                    onChange={handleNameChange}
                    value={formName}
                />
            </label>
          </div>
          <div>
            <DescriptionField 
                formDescription={formDescription} 
                setFormDescription={setFormDescription} 
                apiDeck={apiDeck} 
            />
            </div>
            <CancelButton />
            <SubmitDeckButton 
                formName={formName} 
                setFormName={setFormName} 
                formDescription={formDescription} 
                setFormDescription={setFormDescription}
                existingDeck={apiDeck}
            />
        </form>
      );
}

export default DeckForm;