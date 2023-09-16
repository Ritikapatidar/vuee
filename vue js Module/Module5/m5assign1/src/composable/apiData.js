import {ref,reactive,watchEffect} from 'vue'
import axios from 'axios'
export default function useFunction()
{
   const data=reactive([])
   const error=ref(null)
   const getAllData= async(url)=>
    {
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
            let res= await axios(config)
            data.value=res.data;
            console.log("res", data.value);

        }
        catch(err){
            console.log("Get Error: ", err.message);
            error.value=err.message;
        }
    }
    return { getAllData , data, error }
}