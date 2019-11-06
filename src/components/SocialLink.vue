<template>
  <span class="SocialLink icon is-large" :title="title">
    <a class="is-size-5" :href="link" :service="name" target="_blank">
      <i :class="faClass"></i>
    </a>
  </span>
</template>
 
<script>
  export default {
    name: 'social-link',
    props: {
      link: String,
      name: String
    },
    data: () => {
      return {
        faClass: '',
        title: '',
      }
    },
    mounted(){
      this.faClass = (this.name === 'website') ? 'fas fa-fw fa-link' : 'fab fa-fw fa-' + this.name;
      this.title = this.name[0].toUpperCase() + this.name.slice(1) + ': ' + this.link
    }
  }
</script>
 
<style scoped>
  .SocialLink a[service="linkedin"] { color: #0e76a8; }
  .SocialLink a[service="website"] { color: #00d1b2; }
  .SocialLink a[service="twitter"] { color: #1DA1F2; }
  .SocialLink a[service="instagram"] { color: purple; }
  .SocialLink a[service="facebook"] { color: #3b5998; }
</style>