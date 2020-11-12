<template>
  <div class="home">
    <div id="backButton">
      <router-link to="/step2">
        Back
      </router-link>
    </div>

    <div>
      <h2 class="p">Step 3.</h2>
      <h2 class="p">Why are you writing this complaint?</h2>
    </div>

    <div>
      <textarea
        id="inputBox"
        ref="desc"
        type="text"
        placeholder="type here"
        :value="complaint.complaintDesc"
      ></textarea>
      <div id="next">
        <button @click="saveInput()">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: "Step3",
    components: {},
    data() {
      return {
        // complaint: this.$route.params.complaint
         complaint: {
          complaintTo: localStorage.getItem("complaintTo"),
          complaintDate: localStorage.getItem("complaintDate"),
          complaintLocation: null,
          complaintInvolves: null,
          complaintDesc: localStorage.getItem("complaintDesc"),
          complaintResolution: null,
          complaintFrom: null
        }
      };
    },
  
    methods: {
      saveInput() {
        // console.log(this.complaint);
        // this.complaint.complaintDesc = this.$refs.desc.value;
        localStorage.setItem("complaintDesc", this.$refs.desc.value)
        this.$router.push({
          name: "Step4",
          // params: {
          //   complaint: this.complaint
          // }
        });
      }
    }
  };
</script>

<style scoped>
  .home {
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
    height: 100px;
    width: 300px;
  }
</style>
