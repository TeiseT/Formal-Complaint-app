<template>
  <div>

    <div v-if="company" class="home">
        <h1>Company</h1>
        Name: <input type="text" ref="plaintiff"> 
        Defendant:<input type="text" ref="defendant">
        Description: <input type="text" ref="description">
        <button type="button" @click="makeComplaint()">Complain</button>
    </div>

    <div v-if="person" class="home">
        <h1>Person</h1>
        Name: <input type="text" ref="plaintiff"> 
        Defendant:<input type="text" ref="defendant">
        Description: <input type="text" ref="description">
        <button type="button" @click="makeComplaint()">Complain</button>
    </div>

    <!-- <div>{{complaint}} </div> -->

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Step3',
  components: {

  },
  mounted() {
    console.log(this.$route.params)

  },
  data() {
    return {
      company: this.$route.params.company,
      person: this.$route.params.person,
    
    }
  },
  methods: {
    makeComplaint() {
      const name = this.$refs.plaintiff.value
      const defendant = this.$refs.defendant.value
      const description = this.$refs.description.value

    },
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
