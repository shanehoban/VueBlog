module.exports = {
  author: 'Shane Hoban',
  authorImage: '',
  homepageURL: 'https://www.shanehoban.com',
  homepageURLText: 'www.shanehoban.com',

  blogHeading: 'Shane\'s VueBlog',
  blogInfo: 'The blog is built with VueJS. The back end data is coming from a headless CMS (Contentful). This VueJS blog consumes the Contentful API to display the blog posts contained here.',

  socialLinks: {
    website: 'https://www.shanehoban.com',
    twitter: 'https://www.twitter.com/@shanehoban',
    instagram: 'https://www.instagram.com/shanehoban',
    facebook: 'https://www.facebook.com/shanehoban',
    linkedin: 'https://www.linkedin.com/in/shanehoban/',
  },

  // These should be your Contentful Access Token, space, environment, and entry type details (get these from Contentful app, whatever way you set them up)
  contentfulAccessToken: 'kPclXKcbGUoYDBoyxIKMaOr-G6egYH5tnLGa5UX7kt8',
  contentfulSpaceID: 'rj5zfqr1cns8',
  contentfulEnvironment: 'master',
  contentfulEntryType: 'blogPost',

  ///////////////////////////////////////////////////////////////////////////////////////////
  //////* If you need to create new API URLs/access points, do so below for convenience *////
  ///////////////////////////////////////////////////////////////////////////////////////////

  getEntriesUrl: function(entryID) {
    return 'https://cdn.contentful.com/spaces/' + this.contentfulSpaceID 
      + '/environments/' + this.contentfulEnvironment 
      + '/entries/'+ ((typeof entryID !== 'undefined') ? entryID : '')
      + '?access_token=' + this.contentfulAccessToken 
      + '&content_type=' + this.contentfulEntryType
      + '&order=-sys.createdAt' // orders them so newest are displayed first
  },

  getAssetUrl: function(assetID) {
    return 'https://cdn.contentful.com/spaces/' + this.contentfulSpaceID
    + '/environments/' + this.contentfulEnvironment 
    + '/assets/'+ assetID 
    + '?access_token=' + this.contentfulAccessToken 
  },

  getEntryEditLink: function(entryID) {
    return 'https://app.contentful.com/spaces/' +  this.contentfulSpaceID
      + '/entries/' + entryID
  }
}