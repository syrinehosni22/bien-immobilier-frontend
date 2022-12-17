import axios from 'axios';

const loadAllBien =()=>{
    axios.get("https:127.0.0.1:8080/biens");
}
const loadBienWithId=(id)=>{
    axios.get("https:127.0.0.1:8080/biens"+id)
}
const saveNewBien = (bien) => {
    axios.post("https:127.0.0.1:8080/biens/",bien);
}
const saveBien = (bien) => {
    axios.put("https:127.0.0.1:8080/biens/",bien);
}