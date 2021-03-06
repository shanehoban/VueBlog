import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogHomePage from './pages/BlogHomePage.vue'
import BlogPostPage from './pages/BlogPostPage.vue'
import SocialLink from './components/SocialLink.vue'
import BlogConfig from './blog.config';
import GithubButton from 'vue-github-button'


Vue.use(VueRouter)
Vue.use(require('vue-moment'))

const routes = [
  { path: '/', component: BlogHomePage },
  { path: '/index', component: BlogHomePage },

  { path: '/post/:id', component: BlogPostPage }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  //console.log('Before each called')
  document.querySelector('.Loader').style.display = 'block';
  next()
})

const app = new Vue({
  router,
  components: {
    SocialLink,
    GithubButton
  },
  data: {
    enableGithubButton: BlogConfig.enableGithubButton,

    authorImage: BlogConfig.authorImage,
    blogHeading: BlogConfig.blogHeading,
    blogInfo: BlogConfig.blogInfo,
    socialLinks: BlogConfig.socialLinks,

    author: BlogConfig.author,
    homepageURL: BlogConfig.homepageURL,
    homepageURLText: BlogConfig.homepageURLText,
    year: new Date().getFullYear()
  }
}).$mount('#app')
