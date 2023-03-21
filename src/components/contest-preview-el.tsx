import * as React from "react"
import { PageContext } from "../context/page-context";

const ContestPreview: React.RC<{ el: object }> = ({ el }) => {
    const { page, setPage } = React.useContext(PageContext);
    const handleClick = (event) => {
        event.preventDefault();
        // navigate to the single contest view via PageContext callback function
        setPage({ name: "contest", id: el.id })
        // using native DOM API to navigate routes
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