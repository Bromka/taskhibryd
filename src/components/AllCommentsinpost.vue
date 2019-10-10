<template>
  <div class="commentswrap">
    <h4 class="text-center">{{ headtext }}</h4>
    <div v-for="(comment, index) in comments" :key="index">
      <my-comment :comment="comment" :postID="post" @refreshecomments="refreshecommentsafterdelete"></my-comment>
    </div>
  </div>
</template>
<script>
import { Comments } from "../class.js";

export default {
  props: ["post"],
  data: function() {
    return {
      comments: [],
      headtext: ""
    };
  },

  created: function() {
    let comments = new Comments(this.post);
    if (comments.countComments() > 0) {
      this.comments = comments.getAllPostComments();
      this.headtext = "Комментарии";
    }
  },
  methods: {
    refreshecommentsafterdelete() {
      let comments = new Comments(this.post);
      if (comments.countComments() > 0) {
        this.comments = comments.getAllPostComments();
        this.headtext = "Комментарии";
      } else {
        this.headtext = "";
      }
    }
  },
  beforeUpdate: function() {
    console.log("adsasdasdas");
    let comments = new Comments(this.post);
    if (comments.countComments() > 0) {
      this.comments = comments.getAllPostComments();
      this.headtext = "Комментарии";
    } else {
      this.headtext = "";
    }
  }
};
</script>