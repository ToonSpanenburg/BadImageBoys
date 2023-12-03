<template>
<div class="container">
    <h1 class="m-5 text-center">
        Secret Satan
    </h1>
    <div class="container">
        <div class="container row">
            <button @click="addDeelnemers()" class="btn btn-primary mb-3 float-end">
                Add Person
            </button>
        </div>
        <div class="row" v-for="deelnemer in deelnemers" :key="deelnemer.id">
            <div class="form-group row">
                <div class="col-4">
                    <label for="Option{{deelnemer.id}}">deelnemer {{deelnemer.id}}</label>
                    <input v-model="deelnemer.name" type="text" class="form-control" id="Option{{deelnemer.id}}">
                </div>

                <div class="col-7">
                    <label for="InputEmail">Email address</label>
                    <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="col-1">
                    <label for="Delete">Delfsdfdsf</label>
                    <button id="Delete" class="btn btn-danger">
                        X
                    </button>
                </div>
            </div>
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
    { id: id++, name: '', email: '' }
])

function addDeelnemers()
{
    deelnemers.value.push({ id: id++, name: '', email: ''})
}

function removeDeelnemers(id)
{
    deelnemers.value.splice(id, 1);
}

</script>

<style scoped>

</style>