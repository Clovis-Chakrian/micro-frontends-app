<template>
  <contact-form acao="ATUALIZAR" :contact="contact" @save="updateContact($event)"></contact-form>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
const { httpClient } = await System.import("@mfe/libs");
import * as singleSpa from 'single-spa';

export default {
  name: 'UpdateContact',

  components: {
    ContactForm
  },

  data() {
    return {
      contact: null
    }
  },

  methods: {
    async getContactById() {
      try {
        const response = await httpClient.get(`/Contact/${this.$route.params.contactId}`);

        this.contact = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    async updateContact(contactDto) {
      try {
        await httpClient.put(`/Contact/${this.$route.params.contactId}`, contactDto);

        singleSpa.navigateToUrl('/');
      } catch (error) {
        console.error(error);
      }
    }
  },

  mounted() {
    this.getContactById();
  }
}
</script>
