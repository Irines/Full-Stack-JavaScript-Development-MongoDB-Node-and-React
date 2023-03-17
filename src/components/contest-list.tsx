import { fetchAllContests } from "../api-client";
import ContestPreview from "./contest-preview-el";
import { useState, useEffect, Suspense } from "react";
import Spinner from "./spinner";

const ContestList = ({ initialContests }) => {
    debugger;
    let [contests, setContests] = useState(initialContests.contests)
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetchAllContests().then((contests) => {
        //     setContests(contests)
        //     console.log("loaded data", contests)
        //     setLoading(false)
        // })
    }, [])

    return (
        <>
            {
                contests.length ?
                <div className="contest-list">
                    {contests.map((el) => {
                        return <ContestPreview key={el.id} el={el} />
                    })}
                </div>
                :
                <Spinner loading={loading}/>
            }
        </>
    )
}

export default ContestList;