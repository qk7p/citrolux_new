import axios from "axios";
import apiConfig from "../api-config"

const GRAPHQL_URL = apiConfig.graphql_url;

const graphqlApi = axios.create({
  baseURL: GRAPHQL_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
});

export default graphqlApi;
