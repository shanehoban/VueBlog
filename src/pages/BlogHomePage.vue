<template>
  <div class="content">
    <h3 v-html="pageTitle"></h3>
    

    <div class="all-posts">
      <div class="blog-post" v-for="post in allPosts" v-bind:key="post.sys.id">
        <BlogSnippet :post="post" :key="post.sys.id"></BlogSnippet>
      </div>
    </div>
  </div>
</template>
 
<script>
  import axios from 'axios';
  import BlogSnippet from '../components/BlogSnippet.vue'
  
  const contentfulAPI = 'https://cdn.contentful.com/spaces/rj5zfqr1cns8/environments/master/entries?access_token=kPclXKcbGUoYDBoyxIKMaOr-G6egYH5tnLGa5UX7kt8&content_type=blogPost';

  export default {
    components: {
      'BlogSnippet': BlogSnippet
    },
    data: function() {
      return {
        allPosts: [],
        pageTitle: '',
      }
    },
    mounted(){
      axios
      .get(contentfulAPI)
      .then(response => {
        this.pageTitle = 'All Blog Posts <hr>'
        this.allPosts = response.data.items;
        // console.log("Blog Data:", response);
        
        document.querySelector('.Loader').style.display = 'none';
      })
    }
  }
</script>
 
<style scoped>
  .blog-post {
    margin-bottom: 35px;
  }
</style>