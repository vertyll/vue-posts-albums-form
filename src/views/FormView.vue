<template>
  <main>
    <CreateForm 
      :formInputs="formInputs" 
      :btns="btns" 
      :formInfo="formInfo" 
      v-model:inputsData="inputsData" 
    />
    <FormOutput 
      v-if="isFormDataSend" 
      :inputsData="innputsDataForOutputMsg" 
      :formInputs="formInputs" />
  </main>
</template>

<script>
import CreateForm from "../components/organisms/CreateForm.vue";
import FormOutput from "../components/atoms/FormOutput.vue";
export default {
  data() {
    return {
      inputsData: {}, //Ustawianie wpisanych wartości do pól formularza
      innputsDataForOutputMsg: {},
      invalid: false,
      isFormDataSend: false,
      invalidInputs: ["Imię", "Nazwisko", "Email", "Opis", "PESEL"],
      formInfo: {
        divId: "formContainer",
        formId: "peselForm",
      },
      formInputs: {
        name: {
          name: "name",
          label: "Wprowadź imię:",
          type: "FormInput",
          inputType: "text",
          validation: [this.inputValidation],
        },
        surname: {
          name: "surname",
          label: "Wprowadź nazwisko:",
          type: "FormInput",
          inputType: "text",
          validation: [this.inputValidation],
        },
        email: {
          name: "email",
          label: "Wprowadź email:",
          type: "FormInput",
          inputType: "email",
          validation: [this.inputValidation, this.emailValidation],
        },
        description: {
          name: "description",
          label: "Opis",
          type: "FormTextarea",
          attributes: { row: 4, column: 50 },
          validation: [this.inputValidation],
        },
        pesel: {
          name: "pesel",
          label: "Wprowadź numer PESEL:",
          type: "FormInput",
          inputType: "text",
          maxLength: "11",
          validation: [this.inputValidation, this.peselValidation],
        },
        dob: {
          name: "dob",
          label: "Data urodzenia:",
          type: "FormInput",
          inputType: "date",
          disabled: "true",
          validation: [this.inputValidation],
        },
        age: {
          name: "age",
          label: "Wiek:",
          type: "FormInput",
          inputType: "number",
          disabled: "true",
          validation: [this.inputValidation, this.ageValidation],
        },
        sex: {
          name: "sex",
          label: "Płeć:",
          type: "FormSelect",
          selectOptions: ["Mężczyzna", "Kobieta"],
          textForOptions: ["Mężczyzna", "Kobieta"],
          disabled: "true",
          validation: [this.inputValidation],
        },
      },
      btns: {
        showInputsData: {
          type: "FormBtn",
          name: "showInputsData",
          content: "wyślij",
          btnFunction: () => {
            //lenght
            if (Object.keys(this.inputsData.name || {}).length === 0) {
              this.invalid = true;
              return;
            } else {
              this.isFormDataSend = true;
              this.innputsDataForOutputMsg = this.inputsData;
            }
          },
        },
      },
    };
  },
  components: {
    CreateForm,
    FormOutput
  },
  methods: {
    inputValidation(value) {
      return !!value || "Proszę wypełnić pole.";
    },
    ageValidation(value) {
      return (!isNaN(value) && value > 0) || "Wiek musi być liczbą dodatnią";
    },
    emailValidation(value) {
      const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      let isValid = regexEmail.test(value);
      return isValid || "Niepoprawny adres email";
    },
    peselValidation(value) {
      let weights = "1379137913";
      let checkSum = 0;
      if (/^\d{11}$/.test(value)) {
        let i = 0;
        let tempSum;
        for (i; i < 10; i++) {
          tempSum = value[i] * weights[i];
          tempSum = tempSum % 10;
          checkSum += tempSum;
        }
        this.dataFromPesel(value);
        checkSum = checkSum % 10;
        let checkData = 10 - checkSum;
        if (checkData == value[10]) {
          return true;
        } else {
          return "Numer PESEL jest niepoprawny";
        }
      } else {
        return "Numer PESEL musi składać się z 11 cyfr";
      }
    },
    dataFromPesel(value) {
      const pesel = value;
      const numAdd0 = (num) => (num = "0" + num);
      let dobMonth = 0;
      let dobDay = 0;
      let dobYear = 1900 + parseInt(pesel.slice(0, 2));
      if (pesel[2] >= 2 && pesel[2] < 8) {
        dobYear += Math.floor(pesel[2] / 2) * 100;
      }
      if (pesel[2] >= 8) {
        dobYear -= 100;
      }
      dobMonth = parseInt((pesel[2] % 2) * 10) + parseInt(pesel[3]);
      if (dobMonth < 10) {
        dobMonth = numAdd0(dobMonth);
      }
      dobDay = pesel.slice(4, 6);
      this.inputsData["dob"] = `${dobYear}-${dobMonth}-${dobDay}`;
      let calculatedAge =
        new Date(
          new Date() - new Date(this.inputsData["dob"])
        ).getFullYear() - 1970;
      this.inputsData["age"] = calculatedAge;
      if (value[9] % 2 === 0) {
        this.inputsData["sex"] = "Kobieta";
      } else {
        this.inputsData["sex"] = "Mężczyzna";
      }
    },
  },
};
</script>