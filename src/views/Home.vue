<template>

    <div class="home">

      <div class="header">
         Monku!
      </div>
        
      <div id="info-container">

          <p>Welcome to Monku!</p>

          <p>This is the place where 
          writing formal complaints has 
          never been easier.</p>

      </div>

      <div id="initComplaint">
          <router-link to="/step1">
              <div>Start complaining</div>
          </router-link>
      </div>

    </div>

</template>

<script>

export default {
  name: 'Home',
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
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100%;
  border: 2px solid red
}
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;
  width: 30%;
  border: 2px solid black;
  border-radius: 50%;
  padding:5px;
}
#info-container {
  
  height:40%;
  width: 60%;
  border: 2px solid pink;
  padding:30px;
}
#initComplaint {
  display: flex;
    justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height:60px;
  width:50%;
  border: 2px solid red;
  border-radius: 50%;
}
</style>
