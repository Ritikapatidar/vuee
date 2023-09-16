import {reactive, ref} from 'vue'
import axios from 'axios'

let data=ref([])
const error=ref('')
export default function getData()
{
    const getD= async(url)=>{
        data.value="";
        error.value=""
    try{
        const config={
            method:'get',
            url:url,
            headers:{
                "Accept": 'application/json',
                "Content-Type": 'application/json',
                "Authorization": 'Bearer e66bd4cccb69159cb2c854b3b03cdca7e201ad80f930a5ccea9060a20ed819f8'
            }
        }
        let res=await axios(config)
        data.value=res.data;
    }
    catch(err){
        console.log(err);
        error.value=err.message;
    }
}
    return { data,error,getD }
}