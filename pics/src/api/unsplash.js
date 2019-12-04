import axios from "axios";
import { unsplashApi } from "../config/keys";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${unsplashApi}`
  }
});
