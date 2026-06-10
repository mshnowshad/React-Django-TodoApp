import axios from "axios";

// Base URL — পরে এখানে Django এর URL বসাবো
const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default API;