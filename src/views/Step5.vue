<template>
  <div>
      <div id="backButton">
      <router-link to="/step4">
        Back 
      </router-link>
    </div>
 <div class="home">
    <div id="header">
      <h1 class="headerP">Company </h1>
        <h1>Step 5. </h1>
       </div>
       <p class="p"> Enter location of problem </p> 
       <input id="inputBox" type="text" ref="location" placeholder="type here"> 
      
    </div>
        <div class="nextButton">
        <router-link to="/step6">
          Next
        </router-link>
         </div> 
  

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Step5',
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
