module.exports = {
  enableGithubButton: true,

  author: 'Shane Hoban',
  authorImage: 'https://en.gravatar.com/userimage/40629877/c64f3ebcd68e83eb91aed23333bcb8b2.jpg?size=300',
  homepageURL: 'https://www.shanehoban.com',
  homepageURLText: 'www.shanehoban.com',

  blogHeading: 'Shane\'s VueBlog',
  blogInfo: '<a href="https://github.com/shanehoban/VueBlog" target="_blank">VueBlog</a> is an open source front end app that can be used to build your blog with ease in VueJS. It utilizes a headless CMS (<a href="https://www.contentful.com/?ref=shanehoban.com/vueblog" target="_blank">Contentful</a>) for creating the content.',

  socialLinks: {
    website: 'https://www.shanehoban.com',
    twitter: 'https://www.twitter.com/@shanehoban',
    instagram: 'https://www.instagram.com/shanehoban',
    facebook: 'https://www.facebook.com/shanehoban',
    linkedin: 'https://www.linkedin.com/in/shanehoban/',
    github: 'https://github.com/shanehoban/VueBlog',
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