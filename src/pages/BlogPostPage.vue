<template>
  <div class="content">
    <h1>{{ mutablePost.title }}</h1>
    
    <p v-html="mutablePost.content"></p>

    <hr>
    <PostMetadata :createdAt="mutablePost.sys.createdAt" :updatedAt="mutablePost.sys.updatedAt" :id="mutablePost.sys.id"></PostMetadata>
  </div>
</template>
 
<script>
  import Vue from 'vue'
  import axios from 'axios';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  import PostMetadata from '../components/PostMetadata.vue'
  import { BLOCKS } from '@contentful/rich-text-types';

  let generateID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  // These options and associated method is used to load the images
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        let uniqueID = generateID()
  
        axios
        .get('https://cdn.contentful.com/spaces/rj5zfqr1cns8/environments/master/assets/'+node.data.target.sys.id+'?access_token=kPclXKcbGUoYDBoyxIKMaOr-G6egYH5tnLGa5UX7kt8')
        .then(response => {
          document.querySelector('#'+uniqueID).setAttribute('src', response.data.fields.file.url);
        })

        return '<img id="'+uniqueID+'" src="">';
      }
    }
  }
  
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
      return {
        id: this.$route.params.id,
        mutablePost: {
          sys: Object,
          fields: Object
        }
      }
    },
    mounted(){
      axios
      .get('https://cdn.contentful.com/spaces/rj5zfqr1cns8/environments/master/entries/'+ this.id +'?access_token=kPclXKcbGUoYDBoyxIKMaOr-G6egYH5tnLGa5UX7kt8&content_type=blogPost')
      .then(response => {
          this.mutablePost = response.data;
          this.mutablePost.content = documentToHtmlString(this.mutablePost.fields.content, options)
          this.mutablePost.title = response.data.fields.title
          // console.log("Post data:", response.data);

          document.querySelector('.Loader').style.display = 'none';
      })
    }
  }
</script>
 
<style>
 
</style>