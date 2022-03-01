import React from "react";
import CancelButton from "./CancelButton";
import DescriptionField from "./DescriptionField";
import NameField from "./NameField";
import SubmitDeckButton from "./SubmitDeckButton";

function DeckForm({ apiDeck, formName, formDescription, setFormName, setFormDescription }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");
      };

    return (
        <form onSubmit={handleSubmit}>
            <NameField formName={formName} setFormName={setFormName} />
            <DescriptionField formDescription={formDescription} setFormDescription={setFormDescription} />
            <CancelButton />
            <SubmitDeckButton 
                formName={formName} 
                setFormName={setFormName} 
                formDescription={formDescription} 
                setFormDescription={setFormDescription}
                apiDeck={apiDeck}
            />
        </form>
    );
}

export default DeckForm;