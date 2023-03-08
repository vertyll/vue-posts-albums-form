<template>
  <div class="form-item">
    <label>{{ input.label }}</label>
    <input 
      :type="input.inputType" 
      :name="input.name" 
      :value="modelValue" 
      @input="validateData" 
      @focusout="validateData"
      :disabled="input.disabled" 
      :maxlength="input.maxLength" 
      v-bind="input.attributes || {}"
      :class="{ errorInput: reqMsg }" 
    />
    <span :class="{ errorInputMessage: reqMsg }" v-if="reqMsg">{{ reqMsg }}</span>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      reqMsg: null,
    }
  },
  props: {
    input: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: [String, Number, Date, null],
      required: true,
      default: null,
    },
  },
  methods: {
    validateData(e) {
      const inputValue = e.target.value
      this.$emit("update:modelValue", inputValue)
      let isValid
      if (this.input.validation) {
        for (const fun of this.input.validation) {
          isValid = fun(inputValue)
          if (typeof isValid === "string") {
            this.reqMsg = isValid
            break
          } else {
            this.reqMsg = null
          }
        }
      }
    },
  },
}
</script>