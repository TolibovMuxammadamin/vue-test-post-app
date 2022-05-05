<template>
  <div>
    <div class="d-flex mb-3">
      <h1>Post view</h1>
      <v-spacer/>
      <v-btn @click="formModal = true" color="info" outlined class="mr-3">
        <v-icon left>mdi-pencil</v-icon>
        Edit
      </v-btn>
      <v-btn @click="deleteModal = true" color="error" outlined>
        <v-icon left>mdi-delete</v-icon>
        Detele
      </v-btn>
    </div>
    <v-slide-y-transition>
      <PostItem v-if="!postLoading" :post="post" hide-actions/>
    </v-slide-y-transition>
    <PostLoader v-if="postLoading"/>

    <h3 class="mb-3">Comments</h3>
    <v-progress-linear v-if="commentsLoading" indeterminate />
    <template v-if="comments.length > 0">
      <v-slide-y-transition group>
        <CommentItem
            v-for="comment in comments"
            :comment="comment"
            :key="comment.id"
        />
      </v-slide-y-transition>
    </template>

    <v-snackbar v-model="errSnackbar" color="error" timeout="2000">
      {{ err }}
    </v-snackbar>

    <UIModal v-model="formModal" title="Post Form">
      <PostForm
          v-if="formModal"
          :form-object="post"
          @close-modal="formModal = false"
          @submited="updatePost"
      />
    </UIModal>

    <UIModal v-model="deleteModal" title="Are you sure delete this item?" width="500">
      <ConfirmDelete @yes="deletePost" @no="deleteModal = false" />
    </UIModal>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
import Post from "@/models/Post";
import PostLoader from "@/components/PostLoader";
import CommentItem from "@/components/CommentItem";
import UIModal from "@/components/UIModal";
import PostForm from "@/components/PostForm";
import ConfirmDelete from "@/components/ConfirmDelete";

export default {
  name: "PostView",
  components: {ConfirmDelete, PostForm, UIModal, CommentItem, PostLoader, PostItem},
  data() {
    return {
      post: new Post(),
      postLoading: true,
      comments: [],
      commentsLoading: false,
      err: "",
      errSnackbar: false,
      formModal: false,
      deleteModal: false
    }
  },
  methods: {
    async fetchPost() {
      try {
        this.postLoading = true;
        this.post = new Post(await Post.fetchById(this.$route.params.id));
      } catch (err) {
        this.showErr("Oops!! Something went wrong");
      } finally {
        this.postLoading = false;
      }
    },
    async fetchComments() {
      this.commentsLoading = true;
      this.comments = await Post.fetchPostComments(this.$route.params.id);
      this.commentsLoading = false;
    },
    async updatePost(postFormObj) {
      this.post = new Post(await postFormObj.update());
      this.formModal = false;
    },
    async deletePost () {
      await Post.remove(this.post.id);
      this.deleteModal = false;
      this.showErr("Post deleted!!!")
    },
    showErr (text) {
      this.err = text;
      this.errSnackbar = true;
      setTimeout(() => {
        this.$router.push("/");
      }, 2500)
    }

  },
  mounted() {
    this.fetchPost();
    this.fetchComments()
  }
}
</script>

<style scoped>

</style>
