<template>
  <div class="home-view">
    <div class="d-flex justify-space-between mb-3">
      <h1>Posts list</h1>
      <v-btn @click="openForm" color="success" depressed>
        <v-icon left>mdi-plus</v-icon>
        Add Post
      </v-btn>
    </div>
    <template v-if="posts.length > 0">
      <PostItem
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @view="viewPost"
          @edit="openForm"
          @delete="openDeleteModal"
      />
    </template>
    <PostLoader v-if="isAllPosts" v-intersect="onIntersect"/>

    <UIModal v-model="formModal" title="Post Form">
      <PostForm
          v-if="formModal"
          :form-object="formObject"
          @close-modal="formModal = false"
          @submited="onSubmited"
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
import UIModal from "@/components/UIModal";
import PostForm from "@/components/PostForm";
import ConfirmDelete from "@/components/ConfirmDelete";

export default {
  name: "HomeView",
  components: {ConfirmDelete, PostForm, UIModal, PostLoader, PostItem},
  data() {
    return {
      posts: [],
      page: 0,
      limit: 10,
      total: 1,
      formModal: false,
      formObject: new Post(),
      deleteModal: false,
      deletingPostId: 0
    }
  },
  methods: {
    async fetchPosts() {
      const {data, total} = await Post.fetchList(this.queryParams)
      this.posts.push(...data);
      this.total = total;
    },
    viewPost(id) {
      this.$router.push({name: "post", params: {id}})
    },
    openForm(post) {
      this.formObject = post ? new Post(post) : new Post();
      this.formModal = true;
    },
    /***
     * @param postFormObj {Post}
     */
    async onSubmited(postFormObj) {
      const isUpdatedPost = !!postFormObj.id;
      if (isUpdatedPost) {
        const updatedPost = await postFormObj.update()
        const index = this.posts.findIndex(p => p.id === postFormObj.id);
        this.posts.splice(index, 1, updatedPost);
      } else {
        const createdPost = await postFormObj.create();
        this.posts.unshift(createdPost)
      }
      this.formModal = false;
    },
    openDeleteModal(postId) {
      this.deleteModal = true;
      this.deletingPostId = postId;
    },
    async deletePost () {
      const index = this.posts.findIndex(p => p.id === this.deletingPostId);
      await Post.remove(this.deletingPostId);
      this.deleteModal = false;
      this.posts.splice(index, 1)
    },
    onIntersect(entries) {
      if (entries[0].isIntersecting) {
        if (this.isAllPosts) {
          this.page++;
          this.fetchPosts();
        }
      }
    }
  },
  computed: {
    queryParams() {
      return {
        _page: this.page,
        _limit: this.limit
      }
    },
    isAllPosts() {
      return this.page * this.limit < this.total;
    }
  },
  mounted() {
  }
};
</script>
