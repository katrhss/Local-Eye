import axios from "axios";

export default axios.create({
  baseURL: "https://mongodb-database.herokuapp.com",
});
