import * as React from "react"
import { PageContext } from "../context/page-context";

const ContestPreview: React.RC<{ el: object }> = ({ el }) => {
    const { page, setPage } = React.useContext(PageContext);
    const handleClick = (event) => {
        console.log("handleClick")
        event.preventDefault();
        // navigate to the single contest view
        setPage("contest")
    }
    return (
        <div className="contest-preview" onClick={handleClick}>
            <div className="category">{el.categoryName}</div>
            <div className="contest">{el.contestName}</div>
        </div>
    )
}

export default ContestPreview;