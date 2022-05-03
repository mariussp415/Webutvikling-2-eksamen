import axios from "axios";
import { ref } from 'vue';


const soldierService = (function(){

    const soldiers = ref([
        {id: 1, name:""}
    ]);

    ( async ()=> {
        const request = await axios.get("http://localhost:8080/soldiers");
        soldiers.value = request.data;
    })()

    const getAll = () => soldiers;

    return{
        getAll
    }

}())

export default soldierService;