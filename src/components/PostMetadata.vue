<template>
  <p class="is-size-7 has-text-grey">Posted on: {{ createdAt | moment("dddd, MMMM Do YYYY") }} | Last Updated: {{ updatedAt | moment("dddd, MMMM Do YYYY") }} | Post id: {{ id }}</p>
</template>
 
<script>
  export default {
    props: {
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
        id: this.id
    },
    data: function() {
      return {}
    }
  }
</script>
 
<style scoped>

</style>