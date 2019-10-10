<template>
  <div class="addCommentWrap text-center">
    <h3>Ваш комментарий</h3>
    <form id="addcommentsform" @submit.prevent="addComment" class="col-md-4 mx-auto">
      <input
        type="text"
        class="form-control mb-2"
        v-model="comment.author"
        placeholder="Введите имя"
      />
      <textarea class="form-control mb-2" v-model="comment.text" placeholder="Что хотите сказать?"></textarea>
      <input type="submit" class="btn btn-primary mb-2 mt-3" value="Отправить комментарий" />
    </form>
  </div>

</template>
<script>
import { Comments } from "../class.js";

export default {
  props: ["post"],
  data: function() {
    return {
      comment: {
        author: "",
        text: ""
      }
    };
  },
  methods: {
    addComment() {
      let Com = new Comments(this.post);
      Com.addCom(this.comment.author, this.comment.text);
      this.comment.author = "";
      this.comment.text = "";
      this.$emit ('addednewcomment');
    }
  }
};
/* // <my-addcom> */
</script>