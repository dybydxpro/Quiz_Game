import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:44337/api",
    headers: {
        'Accept': 'application/json','Content-Type': 'application/json'
    }
});