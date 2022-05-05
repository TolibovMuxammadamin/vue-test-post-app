<template>
  <v-card-actions>
    <v-spacer/>
    <div>
      <v-btn @click="$emit('yes')" color="error" class="mr-3" depressed>
        Yes
      </v-btn>
      <v-btn @click="$emit('no')" color="grey" outlined>
        No
      </v-btn>
    </div>
  </v-card-actions>
</template>

<script>
export default {
  name: "ConfirmDelete"
}
</script>

<style scoped>

</style>
