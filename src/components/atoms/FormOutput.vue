<template>
  <div id="form-output">
    <p 
      v-for="input in Object.keys(inputsData)" 
      :key="input"
    >
      {{ formInputs[input].label }} : {{ inputsData[input] }}
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
}
</script>