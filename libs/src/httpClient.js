import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://agenda-backend-bluetechnology.onrender.com/api",
});
