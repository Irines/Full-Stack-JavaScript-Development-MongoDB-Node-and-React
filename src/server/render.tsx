import { fetchAllContests } from "../api-client"
import ReactDOMServer from "react-dom/server"
import App from "../components/app"
// return initial markupfor the server endpoint to use
const serverRender = async () => {
    const contests = await fetchAllContests()
    // returns HTML markup
    const initialMarkup = ReactDOMServer.renderToString(
        <App contestsData={{ contests: contests }} />
    )
    return { initialMarkup, initialData: { contests } }
}

export default serverRender;