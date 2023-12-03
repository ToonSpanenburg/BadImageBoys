<template>
    <div class="form-group row">
        <div class="col-6">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="...">

        </div>
        <div class="col-6">
            <label for="InputEmail">Email address</label>
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
         </div>

</template>

<script>

export default {
    name: "PersoonForm",
    props: {
        deelnemersProp: {
            type: Array,
            required: true,
        }
    },
};
</script>

<style scoped>

</style>