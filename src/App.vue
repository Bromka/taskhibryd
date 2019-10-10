<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="text-center">Посты</h2>
        </div>
      </div>
      <div v-for="(post, index) in postsData" :key="index">
        <app-mypost v-bind:post="post" :key="post.postTime" v-on:refresh="updateposts"></app-mypost>
      </div>
      <app-addnewpost v-on:refreshpost="updateposts" class="text-center"></app-addnewpost>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      postsData: JSON.parse(localStorage.getItem("posts")),
      showfullpost: false
    };
  },
  methods: {
    updateposts() {
      console.log("anywhere");
      this.postsData = JSON.parse(localStorage.getItem("posts"));
    }
  }
};
</script>

<style>
</style>
