<template>
  <div class="content box">
    <router-link :to="{ path: '/post/'+ post.sys.id }"><h4 class="has-text-primary">{{post.fields.title}}</h4></router-link>
    
    <p class="post-snippet" v-html="postHTML"></p>

    <router-link class="read-more-btn button is-primary" :to="{ path: '/post/'+ post.sys.id }">
      <span>Read Full Post </span>
      <span class="icon is-small">
        <i class="fas fa-angle-right"></i>
      </span>
    </router-link>

    <PostMetadata :createdAt="post.sys.createdAt" :updatedAt="post.sys.updatedAt" :entryID="post.sys.id"></PostMetadata>
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
        sys: Object,
        fields: Object
      }
    },
    data: function() {
      return {
        postHTML: ''
      }
    },
    mounted(){
      this.postHTML = documentToHtmlString(this.post.fields.content)
    }
  }
</script>
 
<style scoped>
  .post-snippet {
    max-height: 300px;
    overflow: hidden;
    position: relative;
    cursor: default;
  }

  .post-snippet:after {
    content: ' ';
    position: absolute;
    bottom: 0;
    height: 50px;
    left: 0;
    right: 0;
    background: linear-gradient(0deg, white 30%, transparent);
    z-index: 999;
    display: block;
  }

  .read-more-btn {
    margin-bottom: 10px;
  }
</style>