import React from "react";

function NameField({ formName, setFormName }) {
    const handleNameChange = (event) => setFormName(event.target.value);

    return (
        <div>
            <label htmlFor="formName">
                <p>Name</p>
                <input
                    id="formName"
                    type="text"
                    name="formName"
                    onChange={handleNameChange}
                    value={formName}
                />
            </label>
        </div>
    );
}

export default NameField;