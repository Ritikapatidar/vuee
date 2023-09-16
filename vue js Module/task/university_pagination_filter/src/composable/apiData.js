import { ref } from "vue";
import axios from 'axios'
import router from "../router";

const data = ref([])
const error = ref([])
let dataUpdated = ref({})
let appFormDataArr = ref([
    {
        fname: "Reena",
        mname: "aman",
        lname: "shah",
        email: "reena@gmail.com",
        building: "a", area: "b", state: "c", city: "r",
        gender: "female",
        skills: 'playing',
        tenthmarks: 88, tenthgrade: "A", tenthyear: "2021",
        twelthmarks: 86, twelthgrade: "C", twelthyear: "2012",
        degreemarks: 76, degreegrade: "B", degreeyear: "2233"
    },
    {
        fname: "aasha",
        mname: "aasha",
        lname: "shah",
        email: "reena@gmail.com",
        building: "a", area: "b", state: "c", city: "r",
        gender: "female",
        skills: 'playing',
        tenthmarks: 88, tenthgrade: "A", tenthyear: "2021",
        twelthmarks: 66, twelthgrade: "C", twelthyear: "2012",
        degreemarks: 76, degreegrade: "B", degreeyear: "2233"
    },
    {
        fname: "Niyati",
        mname: "Niyati",
        lname: "dube",
        email: "reena@gmail.com",
        building: "a", area: "b", state: "c", city: "r",
        gender: "female",
        skills: 'playing',
        tenthmarks: 88, tenthgrade: "A", tenthyear: "2021",
        twelthmarks: 56, twelthgrade: "C", twelthyear: "2012",
        degreemarks: 76, degreegrade: "B", degreeyear: "2233"
    },
    {
        fname: "kavya",
        mname: "kavya",
        lname: "Lutra",
        email: "reena@gmail.com",
        building: "a", area: "b", state: "c", city: "r",
        gender: "female",
        skills: 'playing',
        tenthmarks: 88, tenthgrade: "A", tenthyear: "2021",
        twelthmarks: 86, twelthgrade: "C", twelthyear: "2012",
        degreemarks: 76, degreegrade: "B", degreeyear: "2233"
    },
    {
        fname: "neha",
        mname: "naman",
        lname: "shah",
        email: "raj@gmail.com",
        building: "a", area: "b", state: "c", city: "r",
        gender: "female",
        skills: 'Sleeping',
        tenthmarks: 78, tenthgrade: "A", tenthyear: "2021",
        twelthmarks: 56, twelthgrade: "C", twelthyear: "2012",
        degreemarks: 76, degreegrade: "B", degreeyear: "2233"
    }
    , {
        fname: "riya",
        mname: "naman",
        lname: "shah",
        email: "raj@gmail.com",
        building: "a", area: "b", state: "c", city: "r",
        gender: "female",
        skills: 'Sleeping',
        tenthmarks: 78, tenthgrade: "A", tenthyear: "2021",
        twelthmarks: 56, twelthgrade: "C", twelthyear: "2012",
        degreemarks: 76, degreegrade: "B", degreeyear: "2233"
    },
    {
        fname: "avni",
        mname: "naman",
        lname: "shah",
        email: "raj@gmail.com",
        building: "a", area: "b", state: "c", city: "r",
        gender: "female",
        skills: 'Sleeping',
        tenthmarks: 78, tenthgrade: "A", tenthyear: "2021",
        twelthmarks: 56, twelthgrade: "C", twelthyear: "2012",
        degreemarks: 76, degreegrade: "B", degreeyear: "2233"
    }
]);

// Sort data based on first name
appFormDataArr.value.sort(function (x,y){
    let a= x.fname.toUpperCase(),
    b=y.fname.toUpperCase()
    return a==b ? 0 : a>b ? 1 : -1
})

// Get login data
export default function getData() {
    const getD = async (url) => {
        try {
            let res = await axios(url);
            data.value = res.data;
        }
        catch (err) {
            console.log("error ", err.message);
        }
    }

// Insert data in list
    const createUser = async (user) => {
         appFormDataArr.value.push(user);
        console.log("Created user: ", appFormDataArr.value);
    }

// Delete data from list
    const deleteUser = (user) => {
        let restUser = appFormDataArr.value.filter((item) => item !== user)
        appFormDataArr.value = restUser;
        console.log("After Delete: ", appFormDataArr.value);
    }

// Update data in list
    const upadateUser = async (updateDataObj) => {
        let rData = appFormDataArr.value.filter((item) => item !== updateDataObj.value)
        appFormDataArr.value = rData;
        dataUpdated.value = updateDataObj.value;
        console.log("After Update: ", appFormDataArr.value);
        console.log("Data to be Updated: ", dataUpdated.value);
        router.push({ name: 'Create', params: { upStatus: true } })
    }
// Get full name 
    const fullName = (item) => {
        if (item.gender == 'female') {
            return 'Ms. ' + item.fname + " " + item.mname + " " + item.lname
        }
        else {
            return 'Mr. ' + item.fname + " " + item.mname + " " + item.lname
        }
    }

// Get cities based on state id
    const StateToCity = (stateID, cities) => {
        let city = cities.filter((i) => i.StateID == stateID)
        let cityName = city.map(i => i.Name)
        return cityName
    }

// Get states
    const findStates= (states)=>{
        return states.StateName
    }

// Get cities
    const findCities=(cities, stateId)=>{
        console.log(cities, "cities");
        console.log(stateId, 'id');
        let city=cities.filter((i)=> i.StateID == stateId)
        let mycity=city.map((i)=>i.Name)
        return mycity
    }
    return { getD, data, error, createUser, deleteUser, upadateUser, appFormDataArr, dataUpdated, fullName, StateToCity, findStates, findCities }
}

