<template>
  <div :id="formInfo.divId">
    <form :id="formInfo.formId" :name="formInfo.formId">
      <BasicInput 
        v-for="input in formInputs" 
        :key="input" :is="input.type" 
        :input="input" 
        v-model="values[input.name]" 
      />
      <BasicButton 
        v-for="btn in btns" 
        :key="btn" 
        :input="btn" 
        @click="btn.btnFunction" 
      />
    </form>
  </div>
</template>
  
<script>
import BasicInput from "../atoms/BasicInput.vue";
import BasicSelect from "../atoms/BasicSelect.vue";
import BasicButton from "../atoms/BasicButton.vue";
import BasicTextarea from "../atoms/BasicTextarea.vue";
export default {
  props: {
    formInputs: {
      type: Object,
      required: true,
      default: Object,
    },
    btns: {
      type: Object,
      required: true,
      default: Object,
    },
    inputsData: {
      type: Object,
      required: true,
      default: Object,
    },
    formInfo: {
      type: Object,
      required: true,
      default: Object,
    },
  },
  computed: {
    values: {
      get() {
        return this.inputsData;
      },
      set(value) {
        this.$emit("update:inputsData", value);
      },
    },
  },
  components: {
    BasicInput,
    BasicSelect,
    BasicButton,
    BasicTextarea,
  },
};
</script>