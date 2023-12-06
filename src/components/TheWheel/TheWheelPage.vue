<template>
<div class="container">
  <Title id="title" :title="title" :isBlue="isBlue"/>
  <div class="row">
    <div class="col-6">
      <div class="d-flex align-items-center justify-content-center m-0 p-0">
        <h3>
          <b>
            V
          </b>
        </h3>
      </div>
      <div class="d-flex align-items-center justify-content-center m-0 p-0">
        <Wheel id="wheel" @click="spinWheel(rotation)" :optiesProp="opties"/>
      </div>
    </div>
    <div class="col-6">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <button @click="resetWheel()" class="btn btn-primary">
              Reset Wheel
            </button>
          </div>

        </div>
        <div class="row mt-3">
          <div class="col-6" v-for="optie in opties" :key="optie.id">
            <div class="form-group m-1">
              <label for="Option{{optie.id}}">Optie {{optie.id +1}}</label>
              <input v-model="optie.name" type="text" class="form-control" id="Option{{optie.id}}">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
  <Footer/>
</template>

<script>
import Wheel from "@/components/TheWheel/Wheel.vue";
export default {
  name: "TheWheelPage",
  components: {Wheel}
}
</script>

<script setup>
import {ref} from "vue";
import Title from "@/components/TheWheel/Title.vue";
import Footer from "@/components/Shared/Footer.vue";

const title = ref('The Wheel!');
const isBlue = ref(false);
let id = 0;
let aantalOpties = 8;
let isSpinning = false;
let rotation = 1080; // equals 3 full spins
const opties = ref([
  { id: id++, name: 'Players choice' }
])

for (let i = 1; i < (aantalOpties); i++)
{
  addOptie(i+1);
  console.log(opties.value[i].name);
}

function addOptie(i) {
  opties.value.push({ id: id++, name: 'optie'+ i})
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function spinWheel()
{
  if (isSpinning == false)
  {
    isSpinning = true;
    let winner = getRandomNumber(0, aantalOpties -1)
    console.log(opties.value[winner].name)
    turnArround(opties.value[winner].id, aantalOpties);
    setTimeout(function () {
      title.value = opties.value[winner].name;
      isBlue.value = true;
    }, 2000);
  }
}


function turnArround(winnerId, aantalOpties)
{
  const wheel = document.getElementById("wheel");

  rotation = rotation + spinCalc(winnerId, aantalOpties);

  wheel.style.transition = 'transform 2s ease-in-out'; // Apply transition outside the function

  wheel.style.transform = `rotate(${rotation}deg)`;
}

function spinCalc(winnerId, aantalOpties)
{
  let tussen = (360 / aantalOpties);
  let retVal = (tussen * winnerId ) * -1;
  return  retVal;
}

function colorSwitcher()
{
  const title = document.getElementById("title");
  if (title.classList.contains('text-success'))
  {
    title.classList.add("text-success");
  }
  else
  {
    title.classList.remove("text-success");
  }
}

function resetWheel()
{
  const wheel = document.getElementById("wheel");
  rotation = 1080;
  wheel.style.transform = 'none';
  title.value = "The Wheel!";
  isBlue.value = false;
  isSpinning = false;
}

</script>

<style scoped>

</style>