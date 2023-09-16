import {getAllUserData} from './ApiData.js'
import { ref } from 'vue'

let url = `https://jsonplaceholder.typicode.com/posts`;
const { userData, getAllData } = getAllUserData(url);
async function paginationFunc() 
{
    let pagedData = ref([]);
    let curPage = ref(0)
    let pageSize = ref(2)
    let totalPage = ref(0)
    totalPage.value = Math.ceil(userData.value.length / pageSize.value)

    const prevPageLink = (curPage) => {
        return curPage.value == 0 ? false : true
    }

    const nextPageLink = (curPage) => {
        return curPage.value == (totalPage.value - 1) ? false : true
    }

    const updateData = (pageNumber) => {
        curPage.value = pageNumber
    }

    const updateVisibleData = () => {
        pagedData.value = userData.value.slice(curPage.value * pageSize.value, (curPage.value * pageSize.value) + pageSize.value)
    }
    updateVisibleData();
    return { curPage, pageSize, totalPage, pagedData, prevPageLink ,nextPageLink, updateData, updateVisibleData }
}


export { paginationFunc }