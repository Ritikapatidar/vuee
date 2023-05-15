<script>
import { ref,computed,reactive } from "vue";

export default
{
   data() {
    return {
      info: "Hello",
      theme:"white",
      arr:[{name:"Riya", age:23},{name:"Raj", age:25}]
    }
  },
  // Change Theme using V2
  methods:{
  handleTheme(e)
  {
    console.log(e.target.value)
    this.theme=e.target.value;
  }
  },
  computed:{
    lengthInfo(){
     return this.info.length;
    }
  },

setup()
  {
    const count=ref(0);
    const typee=ref("text")
    const theme2=ref("blue")
    const arr2=reactive([{name:"Niya", age:25},{name:"Neha", age:20}])
    const courses= [
   {name:"Java", 'category':["Spring", "Hibernate", "Servlets"]},
   {name:"Python", "category":["Django", "Machine Learning", "Automation"]},
   {'name':"C", "category":["Windows Scripting", "C++"] }
   ]
    const square=computed(()=>{
      return count.value*count.value;
    })
    // Change Theme using V3
    // function handleTheme2(e){
    // theme2.value=e.target.value;
    // }
    return {count, typee, theme2, square, arr2, courses};
  }
}
</script>

<template>
<div class="container">
 <div  :id="theme" class="card">
 <select @change="handleTheme($event)" class="form-control">
 <option value="">Change Theme</option>
 <option value="blue">Blue</option>
 <option value="red">Red</option>
 </select>
    <button class="btn w-25 bg-info p-1" type="button" @click="count++">count is {{ count }}</button>Square: {{square}}
    <div class="card-body">
    {{info}}{{lengthInfo}}
    <input :type="typee" v-model="info" />
    <input type="text" v-model="typee"/>
    </div>

     <div class="card-footer">

     <table class="table">
     <thead><tr><th>Name</th><th>Age</th></tr></thead>
     <tbody>
     <tr v-for="m in arr"><td>{{m.name}}</td><td>{{m.age}}</td></tr>
     </tbody>
     </table>

     <table class="table">
     <thead><tr><th>Name</th><th>Age</th></tr></thead>
     <tbody>
     <tr v-for="m in arr2"><td>{{m.name}}</td><td>{{m.age}}</td></tr>
     </tbody>
     </table>

     <ul>
     <li class="text-start" v-for="course in courses"><strong>{{course.name}}</strong>
     <p class="m-0" v-for="category in course.category">{{category}}</p>
     </li>
     </ul>

     </div>
    </div>
 </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
#red{
  background:red;
}
#blue{
  background:blue;
}
</style>