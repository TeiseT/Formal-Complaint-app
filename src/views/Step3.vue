
<template>
  <div class="home">
    
    <div id="backButton">
      <router-link to="/step2">
        Back 
      </router-link>
    </div>

    <div>
      <h2 class="p">Step 3. </h2>
      <h2 class="p">Why are you writing this complaint?</h2>
    </div>
    
    <div>
      <textarea id="inputBox" ref="step3Input"  type="text" placeholder="type here"></textarea>
    </div>

    <div id="next">
      <router-link to="/step4">
      <button @click="saveInput()">
        Next</button>
      </router-link>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Step3',
  components: {

  },
  data() {
    return {
      compDesc: "",
      company: this.$route.params.company,
      person: this.$route.params.person,
    }
  },
  methods: {
    saveInput() {
      const description = this.$refs.step2Input.value
      this.compDesc= description
      console.log(this.compDesc)
      this.$router.push({ name: 'Step3', params: { compDesc: this.compDesc } })
    }
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
#backButton a {
  margin: 40px;
  margin-right: 290px;
   text-decoration: none;
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
#inputBox {
  font-size: 20px;
  height:100px;
  width:300px;
}

</style>

