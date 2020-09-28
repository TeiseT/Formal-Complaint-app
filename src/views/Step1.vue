<template>
 <div>

    <div class="home">
       <div id="backButton">
      <router-link to="/">
        Back 
      </router-link>
    </div>
     <p id="p"> Step 1. Who are you complaining to?</p>
      
      <div class="specifiedPaths" @click="goToStep2('company')">A Company</div>
      
        or

      <div class="specifiedPaths" @click="goToStep2('person')">A Person</div>

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
      compDesc: this.$route.params.compDesc
    }
  },
  mounted() {
    console.log("step 1 loaded with...")
    console.log(this.compDesc)
  },
  methods: {
    goToStep2(companyOrPerson) {
      if (companyOrPerson == "company") {
        this.$router.push({ name: 'Step2', params: {company: true } })
      } else if (companyOrPerson == "person") {
        this.$router.push({ name: 'Step2', params: {person: true } })
      }
    }
  }
}
</script>

<style scoped>
.home {
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items:center;
  height: 100%;
  width: 100%;

}

#backButton {
  margin: 40px;
  margin-right: 290px;
}
.specifiedPaths {
  display: flex;
  justify-content: space-evenly;
  align-items:center;
  text-align: center;
  height: 100px;
  width:70%;
  margin: 40px;
  border:2px solid green;
}
#p {
  margin: 20px;
}
</style>
