<script setup>
import { reactive, computed, ref, onMounted } from "vue";
import getD from "../composable/getData.js";

let selectedMovie = reactive([]);
let sum= ref(0)
const { fetchData, resData } = getD();
onMounted(() => {
fetchData("/Movies.json")
});

function handleCell(rowIndex,alreadyBooked, price, cellIndex, Start) {
  if(alreadyBooked.includes(cellIndex+Start-1))
  {
    alert("Already Booked")
  }
  else if((!alreadyBooked.includes(cellIndex+Start-1)) && rowIndex<=3)
  {
    sum.value=sum.value+price;
    alreadyBooked.push(cellIndex+Start-1)
    selectedMovie.push(cellIndex+Start-1);
  }
  else if((!alreadyBooked.includes(cellIndex+Start-1)) && rowIndex==4)
  {
    sum.value=sum.value+price+50;
    alreadyBooked.push(cellIndex+Start-1)
    selectedMovie.push(cellIndex+Start-1);
  }
 else if((!alreadyBooked.includes(cellIndex+Start-1)) && rowIndex==5)
  {
     sum.value=sum.value+price+100;
    alreadyBooked.push(cellIndex+Start-1)
    selectedMovie.push(cellIndex+Start-1);
  }
   else if((!alreadyBooked.includes(cellIndex+Start-1)) && rowIndex==6)
  {
     sum.value=sum.value+price+150;
    alreadyBooked.push(cellIndex+Start-1)
    selectedMovie.push(cellIndex+Start-1);
 }
    console.log("DAta: ",selectedMovie);
}

</script>

<template>
  <table class="table table-bordered border-dark">
    <tbody>
      <tr v-for="(rows, rowIndex) in resData.Rows">
         <td 
          @click="handleCell(rowIndex+1, rows.AlreadyBooked, resData.BasicPrice, cellIndex+1, rows.Start)"
          v-for="(cells, cellIndex) in rows.End - rows.Start + 1"
          :class="
            selectedMovie.includes(rows.Start + cells - 1)
              ? 'bg-success' :rows.AlreadyBooked.includes(rows.Start + cells - 1) ? 'bg-secondary'
              : 'bg-light'"
        >
          {{ rows.Start + cells - 1 }}
        </td>
      </tr>
    </tbody>
  </table>

  <div>
  <p>MovieName: {{resData.MovieName}}</p>
  <p>NoofBookedSeat: {{selectedMovie.length}}</p>
  <p>Total Amount: {{sum}}</p>
  <p>Tax: {{sum*0.2}} (20% of movie price)</p>
  <p>Total Payable Amount: {{sum + sum *0.2}} Rs.</p>
  </div>
</template>