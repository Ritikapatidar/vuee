import { ref } from "vue";
import  getData  from "./apiData.js";

const { appFormDataArr } = getData()

// Main service function
export default function paginationFunc()
{
    let currentPage = ref(0);
    let pageSize = ref(4);
    let visibleData = ref([]);
    let totalPages = ref(0);
    totalPages.value=Math.ceil(appFormDataArr.value.length / pageSize.value);
     
// Previous button function
const showPreviosLink = () => {
  console.log(currentPage.value);
  // return currentPage.value == 0 ? false : true;
  return currentPage.value > 0 ? true : false;
};

// Next button function
const showNextLink = () => {
  return currentPage.value == totalPages.value - 1 ? false : true;
};

// Based on click update page content
const updatePage=(pageNumber) =>{
    currentPage.value=pageNumber
    updateVisibleData();
}

// Get fixed size Records from appFormDataArr
const updateVisibleData= ()=>{
visibleData.value=appFormDataArr.value.slice(currentPage.value * pageSize.value, (currentPage.value * pageSize.value) + pageSize.value)
// if(visibleData.value.length == 0 && currentPage.value>0)
// {
//     updatePage(currentPage.value - 1)
// }
}
return {showPreviosLink, showNextLink, updatePage, updateVisibleData, currentPage , pageSize, visibleData, totalPages}
}