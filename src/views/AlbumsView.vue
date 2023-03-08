<template>
  <main>
    <CreateForm 
      :formInputs="formInputs" 
      :btns="btns" 
      :formInfo="formInfo" 
      v-model:inputsData="inputsData"
    />
    <BuildAlbums 
      :albumsData="albumsData" 
      v-if="albumsData" 
    />
  </main>
</template>
<script>
import { getAlbumsData } from "@/api.js";
import CreateForm from "@/components/organisms/CreateForm.vue";
import BuildAlbums from "@/components/BuildAlbums.vue";
export default {
  data() {
    return {
      inputsData: {},
      albumsData: null,
      formInfo: {
        divId: "filterFormContainer",
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
      },
      btns: {
        filter: {
          type: "FormBtn",
          name: "filter",
          content: "Filtruj",
          btnFunction: async () => {
            this.albumsData = null;
            this.albumsData = await getAlbumsData();
            this.useFilter();
          },
        },
        clean: {
          type: "FormBtn",
          name: "clean",
          content: "Wyczyść",
          btnFunction: async () => {
            document.forms["filterForm"].reset();
            this.inputsData = {};
            this.albumsData = null;
            this.albumsData = await getAlbumsData();
          },
        },
      },
    }
  },
  components: {
    CreateForm,
    BuildAlbums,
  },
  async created() {
    this.albumsData = await getAlbumsData();
    if (localStorage.getItem("albumsInputsData")) {
      try {
        this.inputsData = JSON.parse(
          localStorage.getItem("albumsInputsData")
        );
      } catch (e) {
        localStorage.removeItem("albumsInputsData");
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
      localStorage.setItem("albumsInputsData", parsed);
    },
    useFilter() {
      for (let input in this.inputsData) {
        let type = this.formInputs[input].inputType;
        let key = this.formInputs[input].filterKey;
        if (this.inputsData[input]) {
          if (type == "text") {
            this.albumsData = this.albumsData.filter((e) => {
              return e[key].indexOf(this.inputsData[input]) !== -1;
            });
          } else if (type == "number") {
            this.albumsData = this.albumsData.filter((e) => {
              return e[key] == this.inputsData[input];
            });
          }
        }
      }
    },
  },
};
</script>