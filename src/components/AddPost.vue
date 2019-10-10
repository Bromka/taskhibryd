<template>
  <div>
    <button class="btn btn-success" v-if="!showform" v-on:click="addpost">Добавить пост!</button>
    <form class="form form-control" id="postForm" v-else @submit.prevent="sendPost">
      <input
        type="text"
        class="form-control mt-2"
        v-model="post.author"
        placeholder="Как вас зовут?"
      />
      <input
        type="text"
        class="form-control mt-2"
        v-model="post.title"
        placeholder="Введите заголовок"
      />
      <textarea
        class="form-control mt-2"
        v-model="post.text"
        placeholder="Напишите что-нибудь интересное"
        rows="5"
      ></textarea>
      <button type="submit" class="btn btn-primary mb-2 mt-3">Сохранить</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      post: {
        author: "",
        title: "",
        text: "",
        postTime: ""
      },
      showform: false
    };
  },
  methods: {
    addpost() {
      this.showform = !this.showform;
    },
    sendPost() {
      //ключ времени и сохранение в ЛС

      this.post.postTime = Date.now();
      let posts = JSON.parse(localStorage.getItem("posts"));
      if (posts === null) {
        posts = [];
        posts[0] = this.post;
      } else {
        posts.push(this.post);
      }

      localStorage.setItem("posts", JSON.stringify(posts));

      //

      this.showform = !this.showform;

      //очистка формы
      let self = this;
      Object.keys(this.post).forEach(function(key, index) {
        self.post[key] = "";
      });
      //

      //отправка данных в родительский компонент
      this.$emit('refreshpost');
    }
  }
};
</script>
