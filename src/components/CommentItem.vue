<template>
  <v-card class="mb-4">
    <v-card-title>
      <span class="overline">{{ comment.name }}</span>
      <v-spacer />
      <span class="caption">{{ comment.email }}</span>
    </v-card-title>
    <v-card-text class="subtitle-2">{{ comment.body }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    comment: Object
  }
}
</script>

<style scoped>

</style>
