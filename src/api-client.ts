import axios from "axios";
import { SERVER_API_URL } from "../public-config";

export const fetchAllContests = async () => {
  const response = await axios.get(`${SERVER_API_URL}/contests`);
  return response.data;
};