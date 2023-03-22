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

export const addNewNameToContest = async ({contestId, newNameValue}) => {
  const response = await axios.post(`${SERVER_API_URL}/contest/${contestId}`,
    { newNameValue }
  );
  return response.data.updatedContest;
};

export const addNewContest = async ({contestName, categoryName, description}) => {
  const response = await axios.post(`${SERVER_API_URL}/contests`,
    { contestName, categoryName, description }
  );
  return response.data.contest;
};