<template>
  <p class="is-size-7 has-text-grey">
    Posted on: {{ createdAt | moment("dddd, MMMM Do YYYY") }} 
    
    | Last Updated: {{ updatedAt | moment("dddd, MMMM Do YYYY") }} 
    | Post id: <small><a :href="getEntryEditLink" target="_blank" title="Edit Entry">{{ entryID }}</a></small>
  </p>
</template>
 
<script>
  import BlogConfig from '../blog.config';

  export default {
    props: {
        createdAt: String,
        updatedAt: String,
        entryID: String
    },
    data: function() {
      return {
        getEntryEditLink: BlogConfig.getEntryEditLink(this.entryID)
      }
    }
  }
</script>
 
<style scoped>

</style>