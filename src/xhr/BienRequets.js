import axios from 'axios';

export  function loadAllBien() {
    axios.get("https:127.0.0.1:8080/biens");
}
export  function  loadBienWithId (id) {
    axios.get("https:127.0.0.1:8080/biens"+id);
}
export  function  saveNewBien(bien)  {
    axios.post("https:127.0.0.1:8080/biens/",bien);
}
export  function  saveBien  (bien)  {
    axios.put("https:127.0.0.1:8080/biens/",bien);
}
export  function  deleteBien  (id)  {
    axios.delete("https:127.0.0.1:8080/biens/"+id);
}