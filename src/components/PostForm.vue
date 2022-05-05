<template>
  <v-form
      v-model="valid"
      ref="form"
      @submit.prevent="onSubmit"
      lazy-validation>
    <v-text-field
        v-model="formObj.title"
        :rules="[v => !!v || 'Title is required']"
        label="Title"
        dense
        outlined
        clearable
        class="mb-5"
    />
    <v-textarea
      v-model="formObj.body"
      :rules="[v => !!v || 'Body is required']"
      label="Body"
      outlined
      dense
    />

    <div class="d-flex">
      <v-spacer/>
      <v-btn @click="closeModal" color="primary" text class="mr-3">Cancel</v-btn>
      <v-btn type="submit" color="primary" depressed>Save</v-btn>
    </div>
  </v-form>
</template>

<script>
import Post from "@/models/Post";

export default {
  name: "PostForm",
  props: {
    formObject: Post
  },
  data() {
    return {
      valid: false,
      formObj: new Post()
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        this.$emit('submited', this.formObj)
      }
    },
    closeModal() {
      this.$emit('close-modal');
    }
  },
  created() {
    this.formObj = new Post(this.formObject);
  }
}
</script>

<style scoped>

</style>
