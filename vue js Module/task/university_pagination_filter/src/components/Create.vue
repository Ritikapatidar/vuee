<script setup>
import { ref, reactive, computed, onMounted, watchEffect } from "vue";
import getData from "../composable/apiData.js";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useRoute } from "vue-router";
const route = useRoute();

let appFormData = ref({
  fname: "",
  mname: "",
  lname: "",
  email: "",
  building: "",
  area: "",
  state: "",
  city: "",
  gender: "",
  skills: [],
  tenthmarks: null,
  tenthgrade: "",
  tenthyear: "",
  twelthmarks: null,
  twelthgrade: "",
  twelthyear: "",
  degreemarks: null,
  degreegrade: "",
  degreeyear: "",
});

const { createUser, dataUpdated } = getData();

async function handleAdd() 
{
  let result = await v$.value.$validate();
  if (result) {
    console.log("result");
    await createUser(appFormData.value);
    if (route.params.upStatus) {
      alert("Data Successfully Updated");
    } else {
      alert("Data Successfully Inserted");
    }
  }
   appFormData.value = {
      fname: "",
      mname: "",
      lname: "",
      email: "",
      building: "",
      area: "",
      state: "",
      city: "",
      gender: "",
      skills: [],
      tenthmarks: null,
      tenthgrade: "",
      tenthyear: "",
      twelthmarks: null,
      twelthgrade: "",
      twelthyear: "",
      degreemarks: null,
      degreegrade: "",
      degreeyear: "",
    };
}

if (route.params.upStatus) {
  appFormData.value = dataUpdated.value;
}

///////////////// Validation /////////////////
const rules = computed(() => {
  return {
    fname: { required },
    mname: { required },
    lname: { required },
    email: { required },

    building: { required },
    area: { required },
    state: { required },
    city: { required },

    gender: { required },
    skills: { required },

    tenthmarks: { required },
    tenthgrade: { required },
    tenthyear: { required },

    twelthmarks: { required },
    twelthgrade: { required },
    twelthyear: { required },

    degreemarks: { required },
    degreegrade: { required },
    degreeyear: { required },
  };
});
const v$ = useVuelidate(rules, appFormData);
//////////////////Validation end//////////////
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-10 m-auto d-block">
        <div class="card mt-3 p-1 bg-light" style="border-radius: 2%">
          <div class="card-body">
            <form @submit.prevent="handleAdd()">
              <h2 class="text-center">Application Form</h2>
              <div class="col">
                <div class="mb-3 d-flex">
                  <input
                    type="text"
                    v-model="appFormData.fname"
                    name="fname"
                    id="fname"
                    class="form-control"
                    placeholder="First Name"
                    aria-describedby="helpId"
                  />
                  <div v-for="error in v$.fname.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                  <input
                    type="text"
                    v-model="appFormData.mname"
                    name="mname"
                    id="mname"
                    class="form-control"
                    placeholder="Middle Name"
                    aria-describedby="helpId"
                  />
                  <div v-for="error in v$.mname.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                  <input
                    type="text"
                    v-model="appFormData.lname"
                    name="lname"
                    id="lname"
                    class="form-control"
                    placeholder="Last Name"
                    aria-describedby="helpId"
                  />
                  <div v-for="error in v$.lname.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="mb-3 d-flex">
                  <input
                    type="text"
                    v-model="appFormData.email"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="Enter Email"
                    aria-describedby="helpId"
                  />
                  <div v-for="error in v$.email.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                </div>
              </div>

              <div class="col">
                <label>Address</label>
                <div class="mb-3 d-flex">
                  <input
                    type="text"
                    v-model="appFormData.building"
                    name="building"
                    id="building"
                    class="form-control"
                    placeholder="Building"
                    aria-describedby="helpId"
                  />
                  <div v-for="error in v$.building.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                  <input
                    type="text"
                    v-model="appFormData.area"
                    name="area"
                    id="area"
                    class="form-control"
                    placeholder="Area"
                    aria-describedby="helpId"
                  />
                  <div v-for="error in v$.area.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                  <input
                    type="text"
                    v-model="appFormData.state"
                    name="state"
                    id="state"
                    class="form-control"
                    placeholder="State"
                    aria-describedby="helpId"
                  />
                  <div v-for="error in v$.state.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                  <input
                    type="text"
                    v-model="appFormData.city"
                    name="city"
                    id="city"
                    class="form-control"
                    placeholder="City"
                    aria-describedby="helpId"
                  />
                  <div v-for="error in v$.city.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                </div>
              </div>

              <div class="col">
                <label class="me-3">Gender: </label>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    v-model="appFormData.gender"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                  />
                  <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    v-model="appFormData.gender"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label class="form-check-label" for="female">Female</label>
                </div>
                <div v-for="error in v$.gender.$errors">
                  <span class="text-danger">{{ error.$message }}</span>
                </div>
              </div>

              <div class="mb-3">
                <label for="skill" class="form-label mt-2">Skills</label>
                <textarea
                  class="form-control"
                  v-model="appFormData.skills"
                  name="skill"
                  id="skill"
                  rows="3"
                  placeholder="Enter Skills Here..."
                ></textarea>
                <div v-for="error in v$.skills.$errors">
                  <span class="text-danger">{{ error.$message }}</span>
                </div>
              </div>

              <h4>Educational Details:</h4>
              <div class="col">
                10th
                <div class="mb-3 d-flex">
                  <input
                    type="text"
                    v-model="appFormData.tenthmarks"
                    name="mark10"
                    id="mark10"
                    class="form-control"
                    placeholder="Marks"
                  />
                  <div v-for="error in v$.tenthmarks.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                  <input
                    type="text"
                    v-model="appFormData.tenthgrade"
                    name="grade10"
                    id="grade10"
                    class="form-control"
                    placeholder="Grade"
                  />
                  <div v-for="error in v$.tenthgrade.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                  <input
                    type="text"
                    v-model="appFormData.tenthyear"
                    name="year10"
                    id="year10"
                    class="form-control"
                    placeholder="Year Of Passing"
                  />
                  <div v-for="error in v$.tenthyear.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="col">
                12th
                <div class="mb-3 d-flex">
                  <input
                    type="text"
                    v-model="appFormData.twelthmarks"
                    name="mark12"
                    id="mark12"
                    class="form-control"
                    placeholder="Marks"
                  />
                  <div v-for="error in v$.twelthmarks.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                  <input
                    type="text"
                    v-model="appFormData.twelthgrade"
                    name="grade12"
                    id="grade12"
                    class="form-control"
                    placeholder="Grade"
                  />
                  <div v-for="error in v$.twelthgrade.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                  <input
                    type="text"
                    v-model="appFormData.twelthyear"
                    name="year12"
                    id="year12"
                    class="form-control"
                    placeholder="Year Of Passing"
                  />
                  <div v-for="error in v$.twelthyear.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="col">
                Degree
                <div class="mb-3 d-flex">
                  <input
                    type="text"
                    v-model="appFormData.degreemarks"
                    name="markDegree"
                    id="markDegree"
                    class="form-control"
                    placeholder="Marks"
                  />
                  <div v-for="error in v$.degreemarks.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                  <input
                    type="text"
                    v-model="appFormData.degreegrade"
                    name="gradeDegree"
                    id="gradeDegree"
                    class="form-control"
                    placeholder="Grade"
                  />
                  <div v-for="error in v$.degreegrade.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                  <input
                    type="text"
                    v-model="appFormData.degreeyear"
                    name="yearDegree"
                    id="yearDegree"
                    class="form-control"
                    placeholder="Year Of Passing"
                  />
                  <div v-for="error in v$.degreeyear.$errors">
                    <span class="text-danger">{{ error.$message }}</span>
                  </div>
                </div>
              </div>
              <button class="btn btn-success d-block m-auto px-5">
                <span v-if="route.params.upStatus">Edit</span><span v-else>Create</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
