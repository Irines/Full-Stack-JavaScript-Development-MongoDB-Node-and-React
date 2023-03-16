import { RiseLoader } from "react-spinners";
import { useState, CSSProperties } from "react";


const override: CSSProperties = {
    display: "block",
    width: "175px",
    margin: "auto",
    marginTop: "200px",
    borderColor: "red",
};

const Spinner = ({loading}) => {
    return (
        <RiseLoader
            loading={loading}
            color="grey"
            cssOverride={override}
            margin={10}
        />
    )
}

export default Spinner;