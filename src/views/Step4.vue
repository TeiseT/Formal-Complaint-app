<template>
  <div>

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
</style>
