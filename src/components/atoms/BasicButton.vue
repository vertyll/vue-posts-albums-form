<template>
  <div class="form-button">
    <button type="button" :name="input.name">
      {{ input.content }}
    </button>
  </div>
</template>
  
<script>
export default {
  props: {
    input: {
      type: Object,
      required: true,
    },
  },
}
</script>