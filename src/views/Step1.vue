<template>
  <div class="home">
    <div id="backButton">
      <router-link class="noLine" to="/">
        Back
      </router-link>
    </div>
    <h2 id="p">Step 1. Who are you complaining to?</h2>
    <input class="inputBox" type="text" ref="name" :value="complaint.complaintTo" />
    <div class="nextButton" @click="saveStep1()">
      Next
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: "Step1",
    components: {},
    data() {
      return {
        complaint: {
          complaintTo: localStorage.getItem("complaintTo"),
          complaintDate: null,
          complaintLocation: null,
          complaintInvolves: null,
          complaintDesc: null,
          complaintResolution: null,
          complaintFrom: null
        }
      };
    },
    mounted() {
      console.log("step 1 loaded with...");
    },
    methods: {
      saveStep1() {
        console.log("going to step2");

        // this.complaint.complaintTo = this.$refs.name.value;
        localStorage.setItem("complaintTo", this.$refs.name.value);

        this.$router.push({
          name: "Step2",
          // params: {
          //   complaint: this.complaint
          // }
        });
        //:to="{path:'/step2', params:{complaint:complaint}}"
        //the first step save name.value into complaint > complaintTo
        //2nd route to step 2 passing complaint as a parameter
      }
    }
  };
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
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
  .inputBox {
    height: 50px;
    width: 300px;
  }
</style>
