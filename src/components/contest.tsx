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

    return (
        <>
            <Header message={currentContest?.contestName} />
            <div className="contest">
                <div className="title">Contest Description</div>
                <div className="description">{currentContest?.description}</div>
                <a href="/" className="link" onClick={navigateToContestList}>Contest List</a>
            </div>
        </>
    )
}

export default Contest;