import { fetchAllContests } from "../api-client";
import ContestPreview from "./contest-preview-el";
import { useState, useEffect, Suspense } from "react";
import Spinner from "./spinner";
import Header from "./header";

const ContestList = ({ initialContests }) => {
    let [contests, setContests] = useState(initialContests.contests)
    let [loading, setLoading] = useState(true);

    return (
        <>
            {
                contests.length ?
                <>
                    <Header message="Naming Contests" />
                    <div className="contest-list">
                        {contests.map((el) => {
                            return <ContestPreview key={el.id} el={el} />
                        })}
                    </div>
                </>
                :
                <Spinner loading={loading}/>
            }
        </>
    )
}

export default ContestList;