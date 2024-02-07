<template>
  <div class="form-output">
    <p v-for="input in Object.keys(inputsData)" :key="input">
      {{ formInputs[input].nameToOutput }}: {{ inputsData[input] }}
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
