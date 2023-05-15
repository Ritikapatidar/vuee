<script setup>
const props=defineProps(['show', 'studentArr', 'FatherArr', 'MotherArr', "ReferenceRelationArr"])
</script>
<template>
  <div v-if="props.show">
  <h3>Student Details</h3>
  <table class="table mt-4">
  <thead class="bg-secondary">
  <th>Full Name</th>  <th>Date Of Birth</th>   <th>Place Of Birth</th> <th>First Language</th> <th>Address</th>
  </thead>
  <tbody>
   <tr v-for="stdObj in props.studentArr"><td>{{stdObj.fname}} {{stdObj.mname}} {{stdObj.lname}}</td><td>{{stdObj.dob}}</td><td>{{stdObj.place}}</td><td>{{stdObj.language}}</td><td>{{stdObj.address}}</td></tr>
  </tbody>
  </table>

  <h3>Father Details</h3>
  <table class="table mt-4">
  <thead class="bg-secondary">
  <th>Full Name</th>  <th>Email</th>   <th>Education Qualification</th> <th>Profession</th> <th>Designation</th> <th>Phone Number</th>
  </thead>
  <tbody>
   <tr v-for="fatherObj in props.FatherArr"><td>{{fatherObj.fname}} {{fatherObj.mname}} {{fatherObj.lname}}</td> <td>{{fatherObj.email}}</td> <td>{{fatherObj.qualification}}</td><td>{{fatherObj.profession}}</td><td>{{fatherObj.designation}}</td><td>{{fatherObj.phone}}</td></tr>
  </tbody>
  </table>

  <h3>Mother Details</h3>
  <table class="table mt-4">
  <thead class="bg-secondary">
  <th>Full Name</th>  <th>Email</th>   <th>Education Qualification</th> <th>Profession</th> <th>Designation</th> <th>Phone Number</th>
  </thead>
  <tbody>
   <tr v-for="motherObj in props.MotherArr"><td>{{motherObj.fname}} {{motherObj.mname}} {{motherObj.lname}}</td> <td>{{motherObj.email}}</td> <td>{{motherObj.qualification}}</td><td>{{motherObj.profession}}</td><td>{{motherObj.designation}}</td><td>{{motherObj.phone}}</td></tr>
  </tbody>
  </table>

   <h3>Referency and Relative Details</h3>
  <table class="table mt-4">
  <thead class="bg-secondary">
  <th>Relation</th>  <th>Relative Number</th>   <th>Reference Through</th> <th>Referency Address</th> <th>Referency Telephone No.</th>
  </thead>
  <tbody>
   <tr v-for="RefRelObj in props.ReferenceRelationArr"><td>{{RefRelObj.relation}}</td> <td>{{RefRelObj.relationNum}}</td><td>{{RefRelObj.referency}}</td><td>{{RefRelObj.referencyAddress}}</td><td>{{RefRelObj.referencyNum}}</td></tr>
  </tbody>
  </table>

  </div>
</template>