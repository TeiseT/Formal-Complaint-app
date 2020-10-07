<template>
  <div>

    <div class="home">
         <div class="backButton">
          <router-link class="noLine" to="/step1">
            Back 
          </router-link>
        </div>
     <div>
     <h2>Step 2. </h2>
     <h2>Enter the date of when the problem began</h2>
      <input class="inputBox" type="date" ref="date">
       <div class="nextButton" @click="next()">
          Next        
        </div> 
     </div>
       
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Step2',
  components: {

  },
  data() {
    return {
      complaint: this.$route.params.complaint
    }
  },
  mounted() {
    console.log(this.complaint)
  },
  methods: {
    next() {
      console.log(this.complaint)
      this.complaint.complaintDate = this.$refs.date.value
      this.$router.push({
        name: 'Step3',
        params: {
          complaint: this.complaint
        }
      })
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 width:100%;
 flex-direction: column;
}

.noLine {
  position: absolute;
  top: 50px;
  left: 50px;
  text-decoration: none;
}

.inputBox {
  height:50px;
  width:300px;
  font-size:30px;
  margin:40px;


}

</style>