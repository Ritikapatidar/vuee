import axios from "axios";
import { ref } from 'vue'

let data = ref([])
let postedData = ref([])
const error = ref([])

export default function getData() {
    data.value = []
    const getD = async (url) => {
        try {
            let res = await axios(url)
            data.value = res.data;
            console.log("get", data.value);
        }
        catch (err) {
            console.log("Error ", err.message);
            error.value = err.message;
        }
     }

    const postD = async (url, info) => {
        try {
            const config = {
                url: url,
                method: 'post',
                Headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: info.value
            }
            let res = await axios(config)
            console.log("Posted ", res.data);
        }
        catch (err) {
            console.log("post Error", err);
        }
    }
    return { data, getD, error, postD, postedData }
}