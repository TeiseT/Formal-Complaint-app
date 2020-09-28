<template>
  <div>

    <div v-if="company" class="home">
         <div class="backButton">
      <router-link to="/step1">
        Back 
      </router-link>
    </div>
        <h1>Company</h1>
        <div id="cContainer">
             <div> Name of company: <input type="text" ref="plaintiff"> </div> 

        </div>
        <div class="nextButton">
        <router-link to="/step3">
          Next
        </router-link>
         </div> 
        <!-- <button type="button" @click="makeComplaint()">Complain</button> -->
    </div>

    <div v-if="person" class="home">
            <div class="backButton">
      <router-link to="/step1">
        Back 
      </router-link>
    </div>
      <div class="pContainer">
        <h1>Person</h1>
        Name of Defendant: <input type="text" ref="plaintiff"> 
        Defendant:<input type="text" ref="defendant">
        Description: <input type="text" ref="description">

        <!-- <button type="button" @click="makeComplaint()">Complain</button> -->
        </div>

         <div class="nextButton">
        <router-link to="/step3">
          Next
        </router-link>
         </div>
    </div>

    <!-- <div>{{complaint}} </div> -->

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Step2',
  components: {

  },
  mounted() {
    console.log(this.$route.params)

  },
  data() {
    return {
      company: this.$route.params.company,
      person: this.$route.params.person,
    
    }
  },
  methods: {
    makeComplaint() {
      const name = this.$refs.plaintiff.value
      const defendant = this.$refs.defendant.value
      const description = this.$refs.description.value

    },
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
.backButton {
  margin: 40px;
  margin-right: 290px;
  text-decoration: none;
}
.pContainer {
    display: flex;
justify-content: space-evenly;
 align-items: center;
 flex-direction: column;
 border: 2px solid pink;
 padding:50px;
 margin:70px;
}

#cContainer {
    display: flex;
justify-content: space-evenly;
 align-items: center;
 flex-direction: column;
 border: 2px solid pink;
 padding:50px;
 margin:70px;
}
/* .p {
  margin:20px;
  height: 100px;
  width:100px;
} */


</style>