import { isRef, ref } from 'vue'
import axios from 'axios'
import { watchEffect } from 'vue'

const userData = ref(null)
const error = ref(null)
const Geterror = ref(null)
const Delerror = ref(null)
const DelStatus = ref('')
// Get All Data
function getAllUserData(url) {
    const getAllData = async () => {
        userData.value = null;
        Geterror.value = null;
        try {
            const config = {
                method: 'GET',
                url: url.value,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer e66bd4cccb69159cb2c854b3b03cdca7e201ad80f930a5ccea9060a20ed819f8'
                },
            }
            const res = await axios(config)
            userData.value = res.data;
            console.log("Data fetched successfully");
        }
        catch (err) {
            Geterror.value = err;
            console.log("Fetch error: ", error.value);
        }
    }
    if (isRef(url)) {
        watchEffect(getAllData)
    }
    else {
        getAllData()
    }
    return { getAllData, userData, Geterror }
}
// End Get All Data

// Add User
function PostUsers(url, info) {
    const PostUser = async () => {
        try {
            const config = {
                method: 'POST',
                url: url.value,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer e66bd4cccb69159cb2c854b3b03cdca7e201ad80f930a5ccea9060a20ed819f8'
                },
                data: JSON.stringify({
                    "name": info.name,
                    "email": info.email,
                    "gender": info.gender,
                    "status": info.status,
                })
            }
            const res = await axios(config)
            userData.value = [...userData.value, res.data]
            console.log("Posted data: ", res);
        }
        catch (err) {
            error.value = err;
            console.log("Post error: ", error.value);
        }
    }
    if (isRef(url)) {
        watchEffect(PostUser)
    }
    else {
        PostUser()
    }
    return { userData, error }
}
// End Add User

// Update User
    // GetSingle User
function getSingleUserData() {
    const editData = ref([])
    const getSingleData = async (urll) => {
        try {
            const config = {
                method: 'GET',
                url: urll,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer e66bd4cccb69159cb2c854b3b03cdca7e201ad80f930a5ccea9060a20ed819f8'
                },
            }
            const res = await axios(config)
            editData.value = res.data;
            console.log("Data to be edited: ", editData.value);
        }
        catch (err) {
            error.value = err;
            console.log("Get edited data error: " + err);
        }
    }
    // End GetSingleUser
    // UpdateSingle User
    const UpdateSingleUser = async (urll, info) => {
        error.value = null
        try {
            const config = {
                method: 'put',
                url: urll,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer e66bd4cccb69159cb2c854b3b03cdca7e201ad80f930a5ccea9060a20ed819f8'
                },
                data: info
            };
            const res = await axios(config);
            editData.value = res.data
            console.log('editData ', editData.value);

            console.log("Data updated successfully");
        }
        catch (err) {
            console.log("Update Error" + err.message);
        }
    }
    // End UpdateSingle
    return { editData, getSingleData, UpdateSingleUser, error }
}
// End Update User


// Delete User
const DeleteUsers = async (url, uid) => {
    userData.value = null;
    try {
        const config = {
            method: 'DELETE',
            url: url.value + "/" + uid,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer e66bd4cccb69159cb2c854b3b03cdca7e201ad80f930a5ccea9060a20ed819f8'
            }
        }
        const res = await axios(config)
        userData.value = res.data;
        DelStatus.value = res.status;
        console.log("Record deleted successfully", DelStatus.value);
    }
    catch (err) {
        Delerror.value = err.message;
    }
}
// End Delete User

export { PostUsers, userData, getSingleUserData, DeleteUsers, Delerror, DelStatus, getAllUserData }