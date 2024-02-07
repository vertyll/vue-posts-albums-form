<template>
  <div class="form-item">
    <label>{{ input.label }}</label>
    <textarea
      :name="input.name"
      :value="modelValue"
      v-bind="input.attributes || {}"
      @input="validateData"
      @focusout="validateData"
      :class="{ errorInput: reqMsg }"
    >
    </textarea>
    <span :class="{ errorInputMessage: reqMsg }" v-if="reqMsg">{{
      reqMsg
    }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reqMsg: null,
    };
  },
  props: {
    input: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: [String, Number, null],
      required: true,
      default: null,
    },
  },
  methods: {
    validateData(e) {
      const inputValue = e.target.value;
      this.$emit("update:modelValue", inputValue);
      let isValid;
      if (this.input.validation) {
        for (const fun of this.input.validation) {
          isValid = fun(inputValue);
          if (typeof isValid === "string") {
            this.reqMsg = isValid;
            break;
          } else {
            this.reqMsg = null;
          }
        }
      }
    },
  },
};
</script>
