<template>
  <div class="home">
    
    <div id="backButton">
      <router-link to="/home">
        Back 
      </router-link>
    </div>

    <div>
      <p class="p">Step 1. </p>
      <p class="p">Why are you writing this complaint?</p>
    </div>
    
    <div>
      <textarea id="step1Input" type="text" placeholder="type here"></textarea>
    </div>

    <div id="next">
      <router-link to="/step2">Next</router-link>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Step1',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

}
#backButton {
  margin: 40px;
  margin-right: 290px;
}
.p {
  margin: 20px;
}
#step1Input {
  text-align: start;
  height: 200px;
  width: 250px;
}
#next {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100px;
  border: 2px solid black;
  margin: 50px;

}


</style>
