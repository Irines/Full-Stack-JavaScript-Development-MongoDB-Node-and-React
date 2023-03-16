import { createRoot } from "react-dom/client";
import App from "./components/app";
import axios from "axios";
import { SERVER_API_URL } from "../public-config";


const container = document.getElementById("app")
const root = createRoot(container)
axios.get(`${SERVER_API_URL}/contests`).then((response) => {
    console.log(response.data)
})
root.render(<App />)