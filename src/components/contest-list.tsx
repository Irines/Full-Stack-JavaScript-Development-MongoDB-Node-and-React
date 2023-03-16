import ContestPreview from "./contest-preview-el";

const ContestList = ({contests}) => {
    console.log("contests",contests)
    return (
        <div className="contest-list">
            {contests.map((el) => {
                return <ContestPreview key={el.id} el={el}/>
            })}
        </div>
    )
}

export default ContestList;