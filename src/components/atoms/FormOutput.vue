<template>
  <div class="form-output">
    <p v-for="input in Object.keys(inputsData)" :key="input">
      <strong>{{ formInputs[input].nameToOutput }}:</strong> {{ inputsData[input] }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    inputsData: {
      type: Object,
      required: true,
      default: Object,
    },
    formInputs: {
      type: Object,
      required: true,
      default: Object,
    },
  },
};
</script>