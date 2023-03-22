import * as React from "react";
import { useContext } from "react";
import { PageContext } from "../context/page-context";

const ContestPreview: React.RC<{ el: object }> = ({ el }) => {
    const { page, setPage } = useContext(PageContext);

    const handleClick = (event) => {
        // navigate to the single contest view via PageContext callback function
        // using native DOM API to navigate routes
        event.preventDefault();
        setPage({ name: "contest", id: el.id })
        window.history.pushState(
            el.id,
            "",
            `/contest/${el.id}`
        )
    }
    return (
        <div className="contest-preview link" onClick={handleClick}>
            <div className="category">{el.categoryName}</div>
            <div className="contest">{el.contestName}</div>
        </div>
    )
}

export default ContestPreview;