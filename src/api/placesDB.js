import axios from "axios";

export default axios.create({
  baseURL: "https://place-database.herokuapp.com",
});
