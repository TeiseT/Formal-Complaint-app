<template>
  <div>
    <div id="backButton">
      <router-link to="/step6">
        Back
      </router-link>
    </div>
    <div class="home">
      <div>
        <h1 class="p">Company</h1>
        <h1>Step 7.</h1>
        <p id="meh">Lastly, what is your name?</p>
      </div>
      <input id="inputBox" type="text" ref="from" placeholder="e.g Ian" :value="complaint.complaintFrom"/>
    </div>
    <div class="nextButton">
      <button @click="saveInput()">
        Next
      </button>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: "Step7",
    components: {},
    data() {
      return {
        // complaint: this.$route.params.complaint
                       complaint: {
          complaintTo: localStorage.getItem("complaintTo"),
          complaintDate: localStorage.getItem("complaintDate"),
          complaintLocation: localStorage.getItem("complaintLocation"),
          complaintInvolves: localStorage.getItem("complaintInvolves"),
          complaintDesc: localStorage.getItem("complaintDesc"),
          complaintResolution: localStorage.getItem("complaintResolution"),
          complaintFrom: localStorage.getItem("complaintFrom")
        }
      };
    },
    methods: {
      saveInput() {
        console.log(this.complaint);
        // this.complaint.complaintFrom = this.$refs.from.value;
        localStorage.setItem("complaintFrom", this.$refs.from.value)
        this.$router.push({
          name: "Step8",
          // params: {
          //   complaint: this.complaint
          // }
        });
      }
    }
  };
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
    margin-top: 20px;
  }
  #meh {
    margin-top: 20px;
    font-size: 20px;
  }
  #inputBox {
    height: 50px;
    width: 250px;
    margin-top: 20px;
    font-size: 20px;
  }
  .nextButton {
    margin-top: 100px;
  }
</style>
