<template>
  <main>
    <CreateForm
      :formInputs="formInputs"
      :btns="btns"
      :formInfo="formInfo"
      v-model:inputsData="inputsData"
    />
    <div class="spinner" v-if="isLoading"></div>
    <BuildPost :postsData="postsData" v-if="postsData" />
  </main>
</template>

<script>
import { getPostsData } from "@/api.js";
import CreateForm from "@/components/organisms/CreateForm.vue";
import BuildPost from "@/components/organisms/BuildPosts.vue";
export default {
  data() {
    return {
      isLoading: false,
      inputsData: {},
      postsData: null,
      formInfo: {
        divId: "filterFormContainer",
        class: "filter-form-container",
        formId: "filterForm",
      },
      formInputs: {
        author: {
          name: "author",
          label: "Autor:",
          defaultValue: "",
          filterKey: "userId",
          type: "FormInput",
          inputType: "number",
        },
        title: {
          name: "title",
          label: "Tytuł:",
          defaultValue: "",
          filterKey: "title",
          type: "FormInput",
          inputType: "text",
        },
        content: {
          name: "content",
          label: "Treść:",
          defaultValue: "",
          filterKey: "body",
          type: "FormInput",
          inputType: "text",
        },
      },
      btns: {
        filter: {
          type: "FormBtn",
          name: "filter",
          content: "Filtruj",
          btnFunction: async () => {
            this.isLoading = true;
            this.postsData = null;
            this.postsData = await getPostsData();
            this.useFilter();
            this.isLoading = false;
          },
        },
        clean: {
          type: "FormBtn",
          name: "clean",
          content: "Wyczyść",
          btnFunction: async () => {
            this.isLoading = true;
            document.forms["filterForm"].reset();
            this.inputsData = {};
            this.postsData = null;
            this.postsData = await getPostsData();
            this.isLoading = false;
          },
        },
      },
    };
  },
  components: {
    CreateForm,
    BuildPost,
  },
  async created() {
    this.isLoading = true;
    this.postsData = await getPostsData();
    this.isLoading = false;
    if (localStorage.getItem("postsInputsData")) {
      try {
        this.inputsData = JSON.parse(localStorage.getItem("postsInputsData"));
      } catch (e) {
        localStorage.removeItem("postsInputsData");
      }
    }
    this.useFilter();
  },
  beforeUnmount() {
    this.saveFilterSettings();
  },
  methods: {
    saveFilterSettings() {
      const parsed = JSON.stringify(this.inputsData);
      localStorage.setItem("postsInputsData", parsed);
    },
    useFilter() {
      for (let input in this.inputsData) {
        let type = this.formInputs[input].inputType;
        let key = this.formInputs[input].filterKey;
        if (this.inputsData[input]) {
          if (type == "text") {
            this.postsData = this.postsData.filter((e) => {
              return e[key].indexOf(this.inputsData[input]) !== -1;
            });
          } else if (type == "number") {
            this.postsData = this.postsData.filter((e) => {
              return e[key] == this.inputsData[input];
            });
          }
        }
      }
    },
  },
};
</script>
