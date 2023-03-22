import { fetchAllContests, fetchContest } from "../api-client"
import ReactDOMServer from "react-dom/server"
import App from "../components/app"
// return initial markupfor the server endpoint to use
const serverRender = async (req) => {
    const { contestId } = req.params;
    const initialData = contestId ?
    {
        currentContest: await fetchContest(contestId)
    }
    :
    {
        contests: await fetchAllContests()
    };
    // returns HTML markup
    const initialMarkup = ReactDOMServer.renderToString(
        <App initialData={initialData} />
    )
    return { initialMarkup, initialData }
}

export default serverRender;