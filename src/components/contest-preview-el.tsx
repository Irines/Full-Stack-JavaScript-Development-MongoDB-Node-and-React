import * as React from "react"
const ContestPreview: React.RC<{el: object}> = ({el}) => {
    return (
        <div className="contest-preview" key={`${el.id}_contest`}>
            <div className="category">{el.categoryName}</div>
            <div className="contest">{el.contestName}</div>
        </div>
    )
}

export default ContestPreview;