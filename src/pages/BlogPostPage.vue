<template>
  <div class="content">
    <h1>{{ mutablePost.title }}</h1>
    
    <p v-html="mutablePost.content"></p>

    <hr>
    <PostMetadata :createdAt="mutablePost.sys.createdAt" :id="mutablePost.sys.id"></PostMetadata>
  </div>
</template>
 
<script>
  import axios from 'axios';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  import PostMetadata from '../components/PostMetadata.vue'
  
  export default {
    components: {
      'PostMetadata': PostMetadata,
    },
    props: {
      post: {
        type: Object
      }
    },
    data: function() {
      // console.log('Params ID:', this.$route.params.id);
      return {
        id: this.$route.params.id,
        mutablePost: {
          sys: Object,
          fields: Object
        }
      }
    },
    mounted(){
      const contentfulAPI = 'https://cdn.contentful.com/spaces/rj5zfqr1cns8/environments/master/entries/'+ this.id +'?access_token=kPclXKcbGUoYDBoyxIKMaOr-G6egYH5tnLGa5UX7kt8&content_type=blogPost';

      axios
      .get(contentfulAPI)
      .then(response => {
          this.mutablePost = response.data;
          this.mutablePost.content = documentToHtmlString(this.mutablePost.fields.content)
          this.mutablePost.title = response.data.fields.title
          // console.log("Post data:", response.data);

          document.querySelector('.Loader').style.display = 'none';
      })
    }
  }
</script>
 
<style>
 
</style>