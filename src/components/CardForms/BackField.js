import React from "react";

function BackField({ formBack, setFormBack }) {
    const handleBackChange = (event) => setFormBack(event.target.value);

    return (
        <div>
            <label htmlFor="formBack">
                <p>Back</p>
                <textarea 
                    id="formBack" 
                    type="formBack" 
                    formName="formBack"
                    rows="5"
                    cols="50"
                    onChange={handleBackChange} 
                    value={formBack}
                />
            </label>
        </div>
    );
}

export default BackField;