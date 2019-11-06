<template>
  <div class="content">
    <h1>{{ mutablePost.title }}</h1>
    
    <p v-html="this.mutablePost.fields.content"></p>

    <hr>
    <PostMetadata :createdAt="mutablePost.sys.createdAt" :updatedAt="mutablePost.sys.updatedAt" :entryID="id"></PostMetadata>
  </div>
</template>
 
<script>
  import Vue from 'vue'
  import axios from 'axios';
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  import PostMetadata from '../components/PostMetadata.vue'
  import { BLOCKS } from '@contentful/rich-text-types';
  import BlogConfig from '../blog.config';

  let generateID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  // These options and associated method is used to load the images (asset from Contentful)
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        let uniqueID = generateID()
  
        axios.get(BlogConfig.getAssetUrl(node.data.target.sys.id))
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
        sys: Object,
        fields: Object
      }
    },
    data: function() {
      return {
        id: this.$route.params.id,
        mutablePost: {
          sys: {
            createdAt: '',
            updatedAt: '',
            id: ''
          },
          fields: {
            title: '',
            content: ''
          }
        }
      }
    },
    mounted(){
      axios.get(BlogConfig.getEntriesUrl(this.id))
      .then(response => {

          this.mutablePost = response.data
          this.mutablePost.fields.content = documentToHtmlString(this.mutablePost.fields.content, options)
          this.mutablePost.fields.title = response.data.fields.title
          this.mutablePost.sys.createdAt = response.data.sys.createdAt
          this.mutablePost.sys.updatedAt = response.data.sys.updatedAt
          this.mutablePost.sys.id = response.data.sys.id

          console.log("Post data:", response.data);

          document.querySelector('.Loader').style.display = 'none';
      })
    }
  }
</script>
 
<style>
 
</style>