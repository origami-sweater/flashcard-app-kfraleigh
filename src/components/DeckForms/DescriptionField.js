import React from "react";

function DescriptionField({ formDescription, setFormDescription, apiDeck }) {
    const handleDescriptionChange = (event) => setFormDescription(event.target.value);

    if (apiDeck !== undefined) {
        console.log(formDescription)
        //setFormDescription(apiDeck.description)
        return(
            <label htmlFor="decsription">
                <p>Description</p>
                <textarea 
                    id="formD" 
                    type="formD" 
                    formName="formD"
                    rows="5"
                    cols="50"
                    onChange={handleDescriptionChange} 
                    value={formDescription}
                />
            </label>
        )
    } /*else {
        return(
            <label htmlFor="decsription">
                <p>Description</p>
                <textarea 
                    id="formD" 
                    type="formD" 
                    formName="formD"
                    rows="5"
                    cols="50"
                    onChange={handleDescriptionChange} 
                    value={formDescription}
                />
            </label> 
        );
    };*/
}

export default DescriptionField;