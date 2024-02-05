<template>
  <div class="myNavBar p-4">

    <div class="row mb-5">
      <div class="navText col">
        <div class="">
          <div class="">
          <span class="actualNavShadow" :style="{color: myYellow}">
            BadImageBoys
          </span>
            <span class="actualNav pt-1 ps-1" :style="{color: myBlue}">
            BadImageBoys
          </span>
          </div>

          <div class="pt-5 ps-5 ">
          <span class="actualNav" :style="{color: myGreen}">
            BadImageBoys
          </span>
            <span class="actualNavShadow pt-1 ps-1" :style="{color: myOrange}">
            BadImageBoys
          </span>
            <div class="pt-5 ps-5 ">
          <span class="actualNav" :style="{color: myPurple}">
            BadImageBoys
          </span>
              <span class="actualNavShadow pt-1 ps-1" :style="{color: myPink}">
            BadImageBoys
          </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="mt-5 pt-5">
          <div class="p-1">
            <h4>
              <a href="#/" class="p-1 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                <span class="actualNavShadow" :style="{color: myYellow}">
                  Home
                </span>
                <span class="actualNav pt-1 ps-1" :style="{color: myBlue}">
                  Home
                </span>
              </a>
            </h4>
            <h4>
              <a href="#/TheWheel" class="p-1 ps-3 pt-3 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                <span class="actualNav" :style="{color: myGreen}">
                  The Wheel
                </span>
                <span class="actualNavShadow pt-1 ps-1" :style="{color: myOrange}">
                  The Wheel
                </span>
              </a>
            </h4>
            <h4>
              <a href="#/TheWheel" class="p-1 ps-5 pt-5 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                <span class="actualNav" :style="{color: myPurple}">
                  New Page
                </span>
                <span class="actualNavShadow pt-1 ps-1" :style="{color: myPink}">
                  New Page
                </span>
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Header"
}
</script>

<script setup>
  const myGrey = "#f5f5f5"
  const myRed = "#f9120f"
  const myOrange = "#f25a16";
  const myYellow = "#ebccb0";
  const myGreen = "#007f87";
  const myBlue = "#006076";
  const myPink = "#bd75a1";
  const myPurple = "#7a5677"
</script>

<style scoped>
.myNavBar
{
  background-color: black;
  color: white;
}
.navText
{
 font-size: 6em;
}
.actualNav
{
  position: absolute;
  z-index: 1;
}
.actualNavShadow
{
  position: absolute;
  z-index: 2;
}
</style>