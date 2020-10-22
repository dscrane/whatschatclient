import axios from "axios";
export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://young-oasis-67409.herokuapp.com"
      : "http://localhost:5500",
  headers: { "Content-Security-Policy": "default-src *" },
});
