

<template>
  <div>

    <div class="Complaint">
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
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      complaint: {
        plaintiff: "",
        defendant: "",
        description: ""
      }
    }
  },
  methods: {
    makeComplaint() {
     this.complaint.plaintiff = this.$refs.plaintiff.value
     this.complaint.defendant = this.$refs.defendant.value
     this.complaint.description = this.$refs.description.value

    }
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
