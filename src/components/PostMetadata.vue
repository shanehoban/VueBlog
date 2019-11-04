<template>
  <p class="is-size-7 has-text-grey">Posted on: {{ createdAt | moment("dddd, MMMM Do YYYY") }} | Post id: {{ id }}</p>
</template>
 
<script>
  export default {
    props: {
        createdAt: this.createdAt,
        id: this.id
    },
    data: function() {
      return {}
    }
  }
</script>
 
<style scoped>

</style>