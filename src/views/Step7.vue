<template>
  <div>
       <div id="backButton">
      <router-link to="/step6">
        Back 
      </router-link>
    </div>
   <div class="home">
    <div>
      <h1 class="p">Company </h1>
      <h1>Step 7. </h1>
      <p id="meh">Lastly, what is your name?</p>
       </div>
       <input id="inputBox" type="text" ref="plaintiff" placeholder="e.g Ian">   
    </div>
            <!--  <div class="nextButton">
      <router-link to="/step">
          Next
        </router-link>
         </div> -->
<!-- <button type="button" @click="makeComplaint()">Complain</button>-->
  </div>
    <!-- <div>{{complaint}} </div> -->
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Step7',
  components: {

  },                                                                                     
  data() {
    return {

    }
  },
  methods: {
    // makeComplaint() {
    //   const name = this.$refs.plaintiff.value

    // },
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
 margin-top:20px;
}
#meh {
 margin-top:20px;
 font-size:20px;
}
#inputBox {
  height:50px;
  width:250px;
  margin-top:20px;
  font-size:20px;
}
.nextButton{
  margin-top: 100px;
}
</style>
