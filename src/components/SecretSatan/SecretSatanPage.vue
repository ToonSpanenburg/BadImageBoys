<template>
<div class="container">
    <h1 class="m-5 text-center">
        Secret Satan
    </h1>
    <div class="container">
        <div class="container row mt-5 mb-5">
            <div class="col-6">
              <button class="btn btn-success">
                Curse the masses!!
              </button>
            </div>
            <div class="col-6">
              <button @click="addDeelnemers()" class="btn btn-primary">
                Add Person
              </button>
            </div>
        </div>
        <div class="row" v-for="deelnemer in deelnemers" :key="deelnemer.id">
            <div class="form-group row">
                <div class="col-4">
                    <label for="Option{{deelnemer.id}}">deelnemer {{deelnemer.id}}</label>
                    <input v-model="deelnemer.name" type="text" class="form-control" id="Option{{deelnemer.id}}">
                </div>

                <div class="col-7">
                    <label for="Email{{deelnemer.id}}">Email address</label>
                    <input v-model="deelnemer.email" type="email" class="form-control" id="Email{{deelnemer.id}}" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="col-1">
                    <label for="Delete">Delfsdfdsf</label>
                    <button @click="removeDeelnemers(deelnemer.id)" id="Delete" class="btn btn-danger">
                        X
                    </button>
                </div>
            </div>
        </div>
        <div class="container row">

        </div>
    </div>
</div>
    <Footer/>
</template>

<script>
export default {
    name: "SecretSatanPage",
}
</script>

<script setup>
import {ref} from "vue";
import Footer from "@/components/Shared/Footer.vue";

let id =0;
const deelnemers = ref([
    { id: id++, name: '', email: '' },
  { id: id++, name: '', email: '' },
  { id: id++, name: '', email: '' }
])

function addDeelnemers()
{
    deelnemers.value.push({ id: id++, name: '', email: ''})
    PrintAllDeelnemers();
}

function removeDeelnemers(id)
{
  console.log(id);
  deelnemers.value = deelnemers.value.filter(deelnemer => deelnemer.id !== id);
  //deelnemers.value.splice(id, 1);
}

function PrintAllDeelnemers()
{
  deelnemers.value.forEach((deelnemer) => console.log(deelnemer.name + deelnemer.email));
}

</script>

<style scoped>

</style>