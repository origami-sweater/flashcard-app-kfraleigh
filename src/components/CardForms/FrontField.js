import React from "react";

function FrontField({ formFront, setFormFront }) {
    const handleFrontChange = (event) => setFormFront(event.target.value);

    return (
        <div>
            <label htmlFor="formFront">
                <p>Front</p>
                <textarea 
                    id="formFront" 
                    type="formFront" 
                    formName="formFront"
                    rows="5"
                    cols="50"
                    onChange={handleFrontChange} 
                    value={formFront}
                />
            </label>
        </div>
    );
}

export default FrontField;