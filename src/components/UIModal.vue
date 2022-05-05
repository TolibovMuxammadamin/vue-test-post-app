<template>
  <v-dialog :value="value"
            @input="$emit('input', $event.target.value)"
            @click:outside="$emit('input', false)"
            @keydown.esc="$emit('input', false)"
            :max-width="width">
    <v-card>
      <v-card-title>
        <h3>{{ title }}</h3>
        <v-spacer />
        <v-btn @click="$emit('input', false)" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <slot />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "UIModal",
  props: {
    value: Boolean,
    width: {
      type: String,
      default: '900px'
    },
    title: String
  },
}
</script>

<style scoped>

</style>
