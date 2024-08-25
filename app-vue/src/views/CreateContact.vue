<template>
  <contact-form @save="saveContact($event)"></contact-form>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
const { httpClient } = await System.import("@mfe/libs");
import * as singleSpa from 'single-spa'

export default {
  name: "CreateContact",

  components: {
    ContactForm,
  },

  methods: {
    async saveContact(contactDto) {
      try {
        response = await httpClient.post("/Contact", contactDto);

        singleSpa.navigateToUrl('/');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
