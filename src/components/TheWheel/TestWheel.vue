<template class="m-0 p-0">
  <div class="m-0 p-0">
    <div class="wheel m-0 p-0">
      <div class="segment">
        <span>
          Test
        </span>
      </div>
      <div class="segment">
        <span>
          Test
        </span>
      </div>
      <div class="segment">
        <span>
          Test
        </span>
      </div>
      <div class="segment">
        <span>
          Test
        </span>
      </div>
      <div class="segment">
        <span>
          Test
        </span>
      </div>
      <div class="segment">
        <span>
          Test
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestWheel"
}
</script>

<style scoped>
.wheel {
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 100%;
  background-color: #3498db;
  overflow: hidden;
  animation: rotate 3s infinite linear;
}

.segment {
  position: absolute;
  border-style: solid;
  border-width: 200px 116px 0;
  border-color: transparent transparent transparent transparent;
  transform-origin: 50% 100%;

}
.segment span {
  position: absolute;
  top: 50%;
  left: 30%;
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
  left: 21%;
}

.segment:nth-child(2) {
  transform: rotate(60deg);
  border-top-color: #EB7532;
  top: 0;
  left: 21%;
}

.segment:nth-child(3) {
  transform: rotate(120deg);
  border-top-color: #F7D038;
  top: 0;
  left: 21%;
}

.segment:nth-child(4) {
  transform: rotate(180deg);
  border-top-color: #A3E048;
  top: 0;
  left: 21%;
}

.segment:nth-child(5) {
  transform: rotate(240deg);
  border-top-color: #49DA9A;
  top: 0;
  left: 21%;
}

.segment:nth-child(6) {
  transform: rotate(300deg);
  border-top-color: #34BBE6;
  top: 0;
  left: 21%;
}
</style>