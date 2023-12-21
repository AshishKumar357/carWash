import axios from "axios";

const baseUrl = "http://localhost:19006";

const ax = axios.create({
  baseURL: baseUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    // "Access-Control-Allow-Credentials": "true",
  },
});

export default ax;
