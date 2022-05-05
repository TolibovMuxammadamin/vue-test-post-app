<template>
  <v-card class="mb-4">
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-text>{{ post.body }}</v-card-text>
    <v-card-actions v-if="!hideActions" class="blue lighten-5">
      <v-btn @click="$emit('view', post.id)" color="primary" outlined>
        <v-icon left>mdi-eye</v-icon>
        View
      </v-btn>
      <v-btn @click="$emit('edit', post)" color="info" outlined>
        <v-icon left>mdi-pencil</v-icon>
        Edit
      </v-btn>
      <v-btn @click="$emit('delete', post.id)" color="error" outlined>
        <v-icon left>mdi-delete</v-icon>
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: Object,
    hideActions: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
