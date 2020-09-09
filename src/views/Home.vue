<template>
  <div>

    <div class="home">
      <div class="header">
         Monku!
      </div>
      <div id="info-container">
          Welcome to Monku!

          This is the place where 
          writing formal complaints has 
          never been easier.
        </div>

          <div id="initComplaint">
             <a href="Step1.vue"><div>Start complaining</div></a>
        </div>
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
  width: 100vw;
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
