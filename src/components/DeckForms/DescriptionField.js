import React from "react";

function DescriptionField({ formDescription, setFormDescription }) {
    const handleDescriptionChange = (event) => setFormDescription(event.target.value);

    return (
        <div>
            <label htmlFor="decsription">
                <p>Description</p>
                <textarea 
                    id="formDescription" 
                    type="formDescription" 
                    name="formDescription"
                    rows="5"
                    cols="50"
                    onChange={handleDescriptionChange} 
                    value={formDescription}
                />
            </label>
        </div>
    );
}

export default DescriptionField;