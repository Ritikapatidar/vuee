<script setup>
import { ref } from 'vue'
defineProps({
  msg: String,
})
let list=ref([{id:1, title:"item1"},{id:2, title:"item2"}])
let newItem=ref("");
let newId=ref(3);
let editStatus=ref(false);

function addVal()
{
  let flag=false;
  if(!newItem.value)
  {
    alert("Enter an Item");
    flag=true;
  }
  if(flag)
  {
    return true;
  }
  else{
    return false;
  }
}

function handleAdd(e){
if(!addVal()){
list.value.push({id:newId.value++, title:newItem.value})
newItem.value="";
editStatus.value=false;
}
}

function handleDelete(id){
const newList=list.value.filter((item)=>item.id!==id)
list.value=newList;
}

function handleEdit(id){
  console.log(id);
  editStatus.value=true;
  const newList=list.value.filter((item)=>item.id!==id)
  const editItem=list.value.find((item)=>item.id==id)
  list.value=newList;
  newItem.value=editItem.title;
}
</script>

<template>
  <h2>{{ msg }}</h2>
  <div class="card">
  <form v-on:submit.prevent="handleAdd($e)"> 
  <input type="text" placeholder="Enter item" class="form-control" v-model="newItem" /><button :class="editStatus ? 'btn btn-primary btn-block w-100 mt-1 btn-md' : 'btn btn-success btn-block w-100 mt-1 btn-md' "> {{editStatus ? "Edit" : "Add"}} </button>
  </form>
  <div class="card-body">
  <li v-for="l in list">{{l.title}} <button class="btn btn-sm btn-primary m-2 p-2" @click="handleDelete(l.id)">Delete</button><button class="btn btn-sm m-2 btn-primary p-2" @click="handleEdit(l.id)">Edit</button></li>
  </div>
  </div>
</template>

