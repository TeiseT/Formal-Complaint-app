<template>
 <div>

    <div class="home">
      Step 1. Who are you complaining to?
      <div class="specifiedPaths">
        <a href=" ">A Company</a>
        </div>
        or
        <div class="specifiedPaths">
        <a href=" ">A Person</a>
        </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Step1',
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

.specifiedPaths {
 display: flex;
 justify-content: center;
 align-items: center;
 height: 30%;
 width:60%;
 border:2px solid green;
}
</style>
