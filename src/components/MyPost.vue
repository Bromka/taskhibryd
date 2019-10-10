<template>
  <div class="postwrap">
    <div class="row" @click="showfullpost = !showfullpost" v-if="!showfullpost">
      <div class="posttitle_short col-md-4">{{ post.title }}</div>
      <div class="posttext_short col-md-4 text-center">{{ shorttext }}</div>
      <div class="postcomments_count col-md-4 text-right">{{ commentsCount }}</div>
    </div>

    <div class="fullpost" v-show="showfullpost">
      <div class="row">
        <div class="col-md-10">
          <span class="discription">Заголовок:</span>
          <p class="posttitle_full" v-show="!showedit">{{ post.title }}</p>
          <input type="text" v-model="post.title" class="form-control" v-show="showedit" />

          <span class="discription">Текст:</span>
          <p class="posttext_full" v-show="!showedit">{{ post.text }}</p>
          <textarea cols="30" rows="3" class="form-control" v-model="post.text" v-show="showedit"></textarea>
          <button class="btn btn-primary" v-show="showedit" @click="editpost">Сохранить изменения</button>
        </div>
        <div class="col-md-2 text-right">
          <i class="fa fa-pencil" aria-hidden="true" @click="showedit = !showedit"></i>
          <i class="fa fa-trash" aria-hidden="true" @click="deletepost"></i>
          <i class="fa fa-compress" aria-hidden="true" @click="showfullpost = !showfullpost"></i>
        </div>
      </div>

      <my-allpostcomments v-bind:post="post"></my-allpostcomments>
      <my-addcom v-bind:post="post" @addednewcomment="refreshcommentslist"></my-addcom>
    </div>
  </div>
</template>
<script>
import { Comments } from "../class.js";

export default {
  props: ["post"],
  data: function() {
    return {
      showfullpost: false,
      showedit: false
    };
  },
  methods: {
    refreshcommentslist() {
      this.$emit("refresh");
    },
    deletepost() {
      let psts = JSON.parse(localStorage.getItem("posts"));
      for (let i = 0; i < psts.length; i++) {
        if (psts[i].postTime == this.post.postTime) {
          psts.splice(i, 1);

          /* console.log (psts[i].postTime); */
        }
      }
      localStorage.setItem("posts", JSON.stringify(psts));
      this.refreshcommentslist();
    },
    editpost() {
      let psts = JSON.parse(localStorage.getItem("posts"));
      
      for (let i = 0; i < psts.length; i++) {
        if (psts[i].postTime == this.post.postTime) {
          psts[i] = this.post;
        }
      }
      localStorage.setItem("posts", JSON.stringify(psts));
      this.showedit = !this.showedit;
      this.refreshcommentslist();
    }
  },
  computed: {
    shorttext() {
      return this.post.text.slice(0, 10);
    },
    commentsCount() {
      let cmts = new Comments(this.post);
      return cmts.countComments();
    }
  }
};
</script>
<style scoped>
i {
  color: dimgray;
  margin-left: 10px;
}
</style>