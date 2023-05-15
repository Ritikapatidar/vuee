<script setup>
import { ref, reactive } from "vue";
import DataTable from "./DataTable.vue";

const show = ref(false);
const StdDataObj = ref({
  fname: "",
  mname: "",
  lname: "",
  dob: "",
  place: "",
  language: "",
  address: "",
});
const studentArr = reactive([]);

const FatherDataObj = ref({
  fname: "",
  mname: "",
  lname: "",
  email: "",
  qualification: "",
  profession: "",
  designation: "",
  phone: "",
});
const FatherArr = reactive([]);

const MotherDataObj = ref({
  fname: "",
  mname: "",
  lname: "",
  email: "",
  qualification: "",
  profession: "",
  designation: "",
  phone: "",
});
const MotherArr = reactive([]);

const ReferenceRelationDataObj = ref({
  relation: "",
  relationNum: "",
  referency: "",
  referencyAddress: "",
  referencyNum: "",
});
const ReferenceRelationArr = reactive([]);

function SubmitData() {
  console.log("clicked", StdDataObj.value, FatherDataObj.value, MotherDataObj.value);
  studentArr.push(StdDataObj.value);
  FatherArr.push(FatherDataObj.value);
  MotherArr.push(MotherDataObj.value);
  ReferenceRelationArr.push(ReferenceRelationDataObj.value);
  StdDataObj.value = {};
  FatherDataObj.value = {};
  MotherDataObj.value = {};
  ReferenceRelationDataObj.value={};
  console.log("data : ", studentArr, FatherArr, MotherArr, ReferenceRelationArr);
  show.value = true;
}
</script>

<template>
  <div style="background-color: rgb(51 68 96 / 13%)">
    <h2 class="text-center bg-secondary">Student Details</h2>
    <form class="p-2">
      <div class="row my-4">
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="fname"
              class="form-control"
              v-model="StdDataObj.fname"
              placeholder="First name"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="mname"
              class="form-control"
              v-model="StdDataObj.mname"
              placeholder="Middle name"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="lname"
              class="form-control"
              v-model="StdDataObj.lname"
              placeholder="Last name"
            />
          </div>
        </div>
      </div>

      <div class="row my-4">
        <div class="col">
          <div class="form-outline">
            <input
              type="date"
              id="dob"
              class="form-control"
              v-model="StdDataObj.dob"
              placeholder="Date OF Birth"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="pBirth"
              class="form-control"
              v-model="StdDataObj.place"
              placeholder="Place OF Birth"
            />
          </div>
        </div>

        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="language"
              class="form-control"
              v-model="StdDataObj.language"
              placeholder="First Language"
            />
          </div>
        </div>
      </div>

      <div class="row my-4 mx-3">
        <div class="col">
          <div class="form-outline">
            <textarea
              id="address"
              class="form-control"
              placeholder="Address"
              v-model="StdDataObj.address"
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
  <hr class="bg-dark" style="height: 2px" />

  <!-- Father -->
  <div style="background-color: rgb(51 68 96 / 13%)">
    <h2 class="text-center bg-secondary">Father Details</h2>
    <div class="p-2">
      <div class="row my-4">
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="fname"
              class="form-control"
              placeholder="First name"
              v-model="FatherDataObj.fname"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="mname"
              class="form-control"
              placeholder="Middle name"
              v-model="FatherDataObj.mname"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="lname"
              class="form-control"
              placeholder="Last name"
              v-model="FatherDataObj.lname"
            />
          </div>
        </div>
      </div>

      <div class="row my-4">
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="email"
              class="form-control"
              placeholder="Email"
              v-model="FatherDataObj.email"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="qualification"
              class="form-control"
              placeholder="Education Qualification"
              v-model="FatherDataObj.qualification"
            />
          </div>
        </div>
      </div>

      <div class="row my-4">
        <div class="col">
          <div class="form-outline">
            <input
              type="date"
              id="profession"
              class="form-control"
              placeholder="Profession"
              v-model="FatherDataObj.profession"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="designation"
              class="form-control"
              placeholder="Designation"
              v-model="FatherDataObj.designation"
            />
          </div>
        </div>

        <div class="col">
          <div class="form-outline">
            <input
              type="number"
              id="phone"
              class="form-control"
              placeholder="Phone Number"
              v-model="FatherDataObj.phone"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="bg-dark" style="height: 2px" />

  <!-- Mother -->
  <div style="background-color: rgb(51 68 96 / 13%)">
    <h2 class="text-center bg-secondary">Mother Details</h2>
    <div class="p-2">
      <div class="row my-4">
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="fname"
              class="form-control"
              placeholder="First name"
              v-model="MotherDataObj.fname"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="mname"
              class="form-control"
              placeholder="Middle name"
              v-model="MotherDataObj.mname"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="lname"
              class="form-control"
              placeholder="Last name"
              v-model="MotherDataObj.lname"
            />
          </div>
        </div>
      </div>

      <div class="row my-4">
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="email"
              class="form-control"
              placeholder="Email"
              v-model="MotherDataObj.email"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="qualification"
              class="form-control"
              placeholder="Education Qualification"
              v-model="MotherDataObj.qualification"
            />
          </div>
        </div>
      </div>

      <div class="row my-4">
        <div class="col">
          <div class="form-outline">
            <input
              type="date"
              id="profession"
              class="form-control"
              placeholder="Profession"
              v-model="MotherDataObj.profession"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="designation"
              class="form-control"
              placeholder="Designation"
              v-model="MotherDataObj.designation"
            />
          </div>
        </div>

        <div class="col">
          <div class="form-outline">
            <input
              type="number"
              id="phone"
              class="form-control"
              placeholder="Phone Number"
              v-model="MotherDataObj.phone"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="bg-dark" style="height: 2px" />

  <!-- Emergency -->
   <div style="background-color: rgb(51 68 96 / 13%)">
    <h2 class="text-center bg-secondary">Emergency Contact List</h2>
    <div class="p-2">
      <div class="row my-4">
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="fname"
              class="form-control"
              placeholder="Relation"
              v-model="ReferenceRelationDataObj.relation"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="number"
              id="mname"
              class="form-control"
              placeholder="Phone Number"
              v-model="ReferenceRelationDataObj.relationNum"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="bg-dark" style="height: 2px" />

  <!-- Reference Details -->
   <div style="background-color: rgb(51 68 96 / 13%)">
    <h2 class="text-center bg-secondary">Reference Details</h2>
    <div class="p-2">
      <div class="row my-4">
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="refName"
              class="form-control"
              placeholder="Reference Through"
              v-model="ReferenceRelationDataObj.referency"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="number"
              id="rNum"
              class="form-control"
              placeholder="Mobile Number"
              v-model="ReferenceRelationDataObj.referencyNum"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <input
              type="text"
              id="mname"
              class="form-control"
              placeholder="Address"
              v-model="ReferenceRelationDataObj.referencyAddress"
            />
          </div>
        </div>
      </div>
    </div>
  </div>


  <button class="btn btn-secondary my-2 fs-5 d-block m-auto" @click="SubmitData">
    Submit
  </button>

  <DataTable
    :show="show"
    :studentArr="studentArr"
    :FatherArr="FatherArr"
    :MotherArr="MotherArr"
    :ReferenceRelationArr="ReferenceRelationArr"
  />
</template>
