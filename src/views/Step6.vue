<template>
  <div class="home">
    <div id="backButton">
      <router-link to="/step5">
        Back
      </router-link>
    </div>
    <div>
      <div>
        <h1>Step 6.</h1>
        <p id="meh">
          What would you like to happen as a 
          <br>
          result of this letter? Come up with
          a solution!
        </p>
      </div>
      <textarea
        id="inputBox"
        type="text"
        ref="resolution"
        rows="10"
        :placeholder="complaint.complaintResolution"
        @keyup="checkCharacterNo"
      ></textarea>
      <p class="error">{{errorMessage}}</p>
      <p id="newCharacterCount">{{newCharacterCount}}</p>
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
        // complaint: this.$route.params.complaint
                    complaint: {
          complaintTo: localStorage.getItem("complaintTo"),
          complaintDate: localStorage.getItem("complaintDate"),
          complaintLocation: localStorage.getItem("complaintLocation"),
          complaintInvolves: localStorage.getItem("complaintInvolves"),
          complaintDesc: localStorage.getItem("complaintDesc"),
          complaintResolution: localStorage.getItem("complaintResolution"),
          complaintFrom: null
        },
        errorMessage: null,
        characterCount: 200,
        newCharacterCount: 200,
      };
    },
    methods: {
      saveInput() {
        console.log(this.complaint);
        // this.complaint.complaintResolution = this.$refs.resolution.value;
        if (this.$refs.resolution.value == undefined) {
          this.errorMessage = "Please enter your resolution"
        } else if (this.$refs.resolution.value.length > 200) {
          this.errorMessage = "Character count is over the limit, 200 characters"
        } else {
           
        }
        localStorage.setItem("complaintResolution", this.$refs.resolution.value)
        this.$router.push({
          name: "Step7",
          // params: {
          //   complaint: this.complaint
          // }
        });
      },
      checkCharacterNo() {
        console.log("change")
        this.newCharacterCount = this.characterCount - this.$refs.resolution.value.length
      }
    }
  };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
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
    height: 100%;
    width: 100%;
    font-family: 'Varela Round', sans-serif;
  
  }
  .p {
    margin-top: 20px;
  }
  #meh {
    margin-top: 30px;
    font-size: 20px;
    font-weight: 800;
  }
  #inputBox {
    /* height: 50px;
    width: 250px; */
    margin-top: 20px;
    font-size: 20px;
  }
  #newCharacterCount {
    
  }
  .nextButton {
    margin-top: 100px;
  }
</style>
