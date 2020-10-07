<template>
  <div>
    <div id="backButton">
      <router-link to="/step3">
        Back 
      </router-link>
    </div>
 <div class="home">
    <div id="header">
      <h1 class="headerP">Company  </h1>
      <h1>Step 4. </h1>
      <h4 class="headerP">Who does the complaint involve?</h4>
       </div>
       <input id="inputBox" type="text" ref="involves" placeholder="e.g name of seller"> 
          <div class="nextButton">
           <button @click="saveInput()">
        Next</button>
         </div> 
      
    </div>

  

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Step4',
  components: {
 
  },                                                                                     
  data() {
    return {
      complaint: this.$route.params.complaint
    }
  },
  methods: {
    saveInput() {
      console.log(this.complaint)
      this.complaint.complaintInvolves = this.$refs.involves.value
      this.$router.push({
        name: 'Step5',
        params: {
          complaint: this.complaint
        }
      })
    }
  }
}
</script>

<style scoped>
#backButton a {
  margin-top: 30px;
  margin-right: 290px;
   text-decoration: none;
}
.home {
  display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
}
.p {
  margin-top:30px;
  font-size:18px;
}
.headerP {
  margin-top:60px;
}
#inputBox {
  height:40px;
  width: 250px;
  font-size:20px;
  margin-top:20px;
}
.nextButton{
  margin-top: 100px;
}
</style>
