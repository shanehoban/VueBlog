<template>
  <div class="content box">
    <router-link :to="{ path: '/post/'+ post.sys.id }"><h4 class="has-text-primary">{{post.fields.title}}</h4></router-link>
    
    <p v-html="post.fields.content"></p>

    <PostMetadata :createdAt="post.sys.createdAt" :id="post.sys.id"></PostMetadata>
  </div>
</template>
 
<script>
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  import PostMetadata from '../components/PostMetadata.vue'

  export default {
    components: {
      'PostMetadata': PostMetadata
    },
    props: {
      post: {
        type: Object
      }
    },
    data: function() {
      return {}
    },
    mounted(){
      this.post.fields.content = documentToHtmlString(this.post.fields.content)
    }
  }
</script>
 
<style scoped>

</style>