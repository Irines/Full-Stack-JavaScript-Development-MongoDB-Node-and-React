import { fetchAllContests } from "../api-client";
import ContestPreview from "./contest-preview-el";
import { useState, useEffect } from "react";
import Spinner from "./spinner";
import Header from "./header";
import AddContestForm from "./add-contest-form";

const ContestList = ({ initialContests }) => {
    let [contests, setContests] = useState(initialContests.contests ?? []);
    let [loading, setLoading] = useState(true);
    let [showForm, setShowForm] = useState(false);

    useEffect(() => {
        // fetch data on client if no contests lists from SSR
        // if (!initialContests.contests) {
        //     fetchAllContests().then((contests) => {
        //       setContests(contests);
        //     })
        // }

        // need to fetch always because we need updated list after the addition of a new contest
        fetchAllContests().then((contests) => {
            setContests(contests);
        })
      }, [initialContests])

    const openAddContestForm = (event) => {
        event.preventDefault();
        setShowForm(true);
    }

    return (
        <>
            {
                contests?.length ?
                    <>
                        <Header message="Naming Contests" />
                        <div className="contest-list">
                            {contests.map((el) => {
                                return <ContestPreview key={el.id} el={el} />
                            })}
                        </div>
                        
                        {
                            showForm 
                            ?
                            <AddContestForm/>
                            :
                            <a href="" className="link titleLink" onClick={openAddContestForm}>Add New Contest</a>
                        }
                    </>
                    :
                    <Spinner loading={loading} />
            }
        </>
    )
}

export default ContestList;