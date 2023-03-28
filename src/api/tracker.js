import axios from "axios";

export default axios.create({
  baseURL:
    "https://cloud.mongodb.com/v2/6400bd9b27ab503d940bb8f3#/metrics/replicaSet/6400c15733dbc16bda1b161a/explorer/test",
});
