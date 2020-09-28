<template>
  <div>

    <div>
      <h1 class="p">Company </h1>
      <h3 class="p">Fill out some relevant details you may want to include in your complaint</h3>
       </div>

    <div class="home">
        Name: <input type="text" ref="plaintiff"> 
        Defendant:<input type="text" ref="defendant">
        Description: <input type="text" ref="description">
        <button type="button" @click="makeComplaint()">Complain</button>
    </div>
  <div>{{complaint}} </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Step4',
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
 justify-content: center;
 align-items: center;
 flex-direction: column;
}
.p {
  margin: 20px;
}
</style>
