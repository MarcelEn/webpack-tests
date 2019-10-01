import Constants from "./Constants"


console.log(Constants);
window.axios.get("jsonfile.json")
    .then(({ data }) => console.log(data))