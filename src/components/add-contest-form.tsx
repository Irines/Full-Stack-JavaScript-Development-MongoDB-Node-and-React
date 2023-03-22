import { addNewContest } from "../api-client";
import { useContext, useState } from "react";
import { PageContext } from "../context/page-context";

const AddContestForm = () => {
    const { page, setPage } = useContext(PageContext);

    const navigateToNewContestPage = (newContestId) => {
        setPage({ name: "contest", id: newContestId});
        window.history.pushState(
            newContestId,
            "",
            `/contest/${newContestId}`
        )
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const contestName = event.target.contestName.value;
        const categoryName = event.target.contestCategory.value;
        const description = event.target.contestDescription.value;
        if (contestName && categoryName && description) {
            addNewContest({contestName, categoryName, description}).then((response) => {
                if (response) {
                    navigateToNewContestPage(response.id);
                }
            });
        } 
    }

    return (
        <div className="body">
            <form onSubmit={handleFormSubmit} className="new-contest">
                <input type="text" name="contestName" required placeholder="Enter Contest Name"/>
                <input type="text" name="contestCategory" required placeholder="Enter Category Name"/>
                <textarea 
                    required
                    rows="5" 
                    cols="30"
                    placeholder='Enter Description...' 
                    maxLength='1000' 
                    minLength='10' 
                    name="contestDescription" 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddContestForm;