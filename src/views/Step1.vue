<template>
    <div class="home">
       <div id="backButton">
      <router-link class="noLine" to="/">
        Back 
      </router-link>
    </div>
     <h2 id="p"> Step 1. Who are you complaining to?</h2> <input class="inputBox" type="text" ref="name">
    <div class="nextButton">
        <router-link :to="{path:'/step2', params:{complaint:complaint}}">
          Next
        </router-link>
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
      complaint:{
        complaintTo: this.$refs.name.value,
        complaintDate: null,
        complaintLocation: null,
        complaintInvolves: null,
        complaintDesc: null,
        complaintResolution: null,
        complaintFrom: null,
      }
    }
  },
  mounted() {
    console.log("step 1 loaded with...")
  
  }

}
</script>

<style scoped>
.home {
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items:center;
  height: 100vh;
  width: 100vw;

}
.noLine {
  position: fixed;
  top: 50px;
  left: 50px;
  text-decoration: none;
}

#backButton {
  margin: 40px;
  margin-right: 290px;
}


.nextButton {
  margin-top: 20px;
}
.inputBox{
  height:50px;
  width:300px;
}
</style>
