<template class="m-0 p-0">
  <div class="m-0 p-0">
    <div class="wheel m-0 p-0">
      <div class="segment" v-for="optie in optiesProp" :key="optie.id">
        <span>
          {{ optie.name }}
        </span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    optiesProp: {
      type: Array,
      required: true,
    }
  },
};

</script>

<style scoped>
.wheel {
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #3498db;
  overflow: hidden;
  animation: rotate 3s infinite linear;
}

.segment {
  position: absolute;

  border-style: solid;
  border-width: 200px 100px 0;
  border-color: transparent transparent transparent transparent;
  transform-origin: 50% 100%;
  top: 0;
  left: 25%;
  transform: translateX(-50%);

}

.segment span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 300px;
}

.segment:nth-child(1) {
  transform: rotate(0deg);
  border-top-color: #E6261F;
  top: 0;
  left: 25%;
}

.segment:nth-child(2) {
  transform: rotate(45deg);
  border-top-color: #EB7532;
  top: 0;
  left: 25%;
}

.segment:nth-child(3) {
  transform: rotate(90deg);
  border-top-color: #F7D038;
  top: 0;
  left: 25%;
}

.segment:nth-child(4) {
  transform: rotate(135deg);
  border-top-color: #A3E048;
  top: 0;
  left: 25%;
}

.segment:nth-child(5) {
  transform: rotate(180deg);
  border-top-color: #49DA9A;
  top: 0;
  left: 25%;
}

.segment:nth-child(6) {
  transform: rotate(225deg);
  border-top-color: #34BBE6;
  top: 0;
  left: 25%;
}

.segment:nth-child(7) {
  transform: rotate(270deg);
  border-top-color: #4355DB;
  top: 0;
  left: 25%;
}

.segment:nth-child(8) {
    transform: rotate(315deg);
    border-top-color: #D23BE7;
    top: 0;
    left: 25%;
}
</style>