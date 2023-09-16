import { isRef, ref } from 'vue'
import axios from 'axios'
import { watchEffect } from 'vue'

const resData=ref([])
export default function getD(){
    const fetchData= async(url)=>{
       try{
        // const config={
        //     method:'get',
        //     url:url,
        //     headers:{
        //         "Accept": "application/json",
        //         "Content-Type": "application/json",
        //         "Authorization": 'Bearer e66bd4cccb69159cb2c854b3b03cdca7e201ad80f930a5ccea9060a20ed819f8'
        //     }
        // }
        const res=await axios(url)
        resData.value=res.data;
        }
        catch(err){
            console.log("Error: ", err.message);
        }  
    }
    return {fetchData, resData}
}