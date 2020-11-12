<template>
  <div>
    <div id="backButton">
      <router-link to="/step5">
        Back
      </router-link>
    </div>
    <div class="home">
      <div>
        <h1 class="p">Company</h1>
        <h1>Step 6.</h1>
        <p id="meh">
          What would you like to happen as a result of this letter? Come up with
          a solution!
        </p>
      </div>
      <input
        id="inputBox"
        type="text"
        ref="resolution"
        placeholder="type here"
      />
      <div class="nextButton">
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
    name: "Step6",
    components: {},
    data() {
      return {
        complaint: this.$route.params.complaint
      };
    },
    methods: {
      saveInput() {
        console.log(this.complaint);
        this.complaint.complaintResolution = this.$refs.resolution.value;
        this.$router.push({
          name: "Step6",
          params: {
            complaint: this.complaint
          }
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
