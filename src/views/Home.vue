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
  /* border: 2px solid red; */
  font-family: 'Varela Round', sans-serif;
}
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 110px;
  width: 110px;
  border: 2px solid black;
  border-radius: 50%;
  padding:5px;
  font-size: 25px;
  font-weight: bold;
}
#info-container {
  height:150px;
  width: 300px;
  /* border: 2px solid pink; */
  padding:20px;
  margin-bottom: 250px;
  font-size: 20px;
  font-weight:500;
  color: white;
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
  margin-bottom: 100px;
}
</style>
