import React from "react";
import "../SubjectForm/SubjectForm.css"


function SubjectForm() {
    return (
        <div className="form-container">
            <form>
                <div className="Assaignment-heading"><h1>Assaignment Form</h1></div>
                <label for="fname">Title</label>
                <input type="text" id="Title" name="firstname" placeholder="Title..."></input>

                <label for="country">Description</label>
                <input type="text" id="Description" name="Description" placeholder="Description..."></input>
                
                <input type="Date" id="Date" name="Date"></input>
                <label for="Deadline">Set the Deadline</label>
                
                    
                

                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default SubjectForm;