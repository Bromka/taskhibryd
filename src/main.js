import Vue from 'vue'
import App from './App.vue'
import Addpostcom from './components/AddPost.vue'
import Mypost from './components/MyPost.vue'
import Allcomentsinpost from './components/AllCommentsinpost.vue'
import Addcomment from './components/AddComment.vue'
import Commentarycomponent from './components/Commentarycomponent.vue'

Vue.config.productionTip = false

Vue.component('app-addnewpost', Addpostcom);
Vue.component('app-mypost', Mypost);
Vue.component('my-allpostcomments', Allcomentsinpost);
Vue.component('my-addcom', Addcomment);
Vue.component('my-comment', Commentarycomponent);

new Vue({
  render: h => h(App),
}).$mount('#app')



