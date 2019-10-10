
<template>
  <div class="row d-flex justify-content-between" v-if="havecomment">
    <div class="col-md-4 commentary_post">
      {{comment.text}}
      <span>написал(а)</span>
      {{ comment.author }}
    </div>
    <div class="instruments">
      <i class="fa fa-trash-o ml-1" @click="deleteComment" aria-hidden="true"></i>
    </div>
  </div>
</template>
<script>

import { Comments } from "../class.js";

export default {
  props: ["comment", "postID"],
  data: function() {
    return {
      havecomment: true
    };
  },
  methods: {
    deleteComment() {
      let com = new Comments(this.postID);
      com.deleteCommenary(this.comment);
      this.$emit('refreshecomments');
    }
  }
};

// my-comment
</script>