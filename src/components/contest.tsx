import { useState, useEffect, useContext } from "react";
import { fetchContest } from "../api-client";
import { PageContext } from "../context/page-context";
import Header from "./header";

const Contest = ({ initialContest }) => {
    let [currentContest, setCurrentContest] = useState(initialContest);
    const { page, setPage } = useContext(PageContext);

    useEffect(() => {
        // to check if we need to make a request query 
        // if we directly enter link /contest/:contestId it's SSR
        // if we navigate from the main page, we need to fetch data
        if (!initialContest.names) {
            fetchContest(initialContest.id).then((contest) => {
                setCurrentContest(contest);
            })
        }
    }, [initialContest.id, initialContest.names])

    const navigateToContestList = (event) => {
        event.preventDefault();
        setPage({ name: "contestList" });
        window.history.pushState({}, "", `/`);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newName = event.target.newName;
        console.log(newName.value);
    }

    return (
        <>
            <Header message={currentContest?.contestName} />
            <div className="contest">
                <div className="title">Contest Description</div>
                <div className="description">{currentContest?.description}</div>

                <div className="title">Proposed Names</div>
                <div className="body">
                    {
                        currentContest?.names?.length
                            ?
                            (
                                <div className="list">
                                    {currentContest.names.map((nameObj) => (
                                        <div key={nameObj.id} className="item">{nameObj.name}</div>
                                    ))}
                                </div>
                            )
                            :
                            <div>No names proposed yet. </div>
                    }
                </div>

                <div className="title">Propose a New Name</div>
                <div className="body">
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" name="newName" />
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <a href="/" className="link" onClick={navigateToContestList}>Contest List</a>
            </div>
        </>
    )
}

export default Contest;