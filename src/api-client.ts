import axios from "axios";
import { SERVER_API_URL } from "../public-config";

export const fetchAllContests = async () => {
  const response = await axios.get(`${SERVER_API_URL}/contests`);
  return response.data.contests;
};

export const fetchContest = async (contestId) => {
  const response = await axios.get(`${SERVER_API_URL}/contest/${contestId}`);
  return response.data.contest;
};