import axios from 'axios'
import {ref} from 'vue'

let data= ref([])
export default function getData(){
data.value=[]
const getD=async (url)=>{
try{
const res=await axios(url)
data.value= res.data
console.log("data", data.value);
}
catch(err)
{
    console.log("error", err.message);
}
}
return { getD, data }
}