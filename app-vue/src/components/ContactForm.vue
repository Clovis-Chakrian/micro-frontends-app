<template>
  <main class="p-fluid flex flex-column align-items-center">
    <h1>{{acao == 'ATUALIZAR' ? 'Atualizar' : 'Criar' }} Contato</h1>
    <div class="p-fluid formgrid grid w-6">
      <div class="field col-12 md:col-6">
        <label for="nome">Nome</label>
        <InputText id="nome" placeholder="John" v-model="contactDto.name"></InputText>
      </div>

      <div class="field col-12 md:col-6">
        <label for="sobrenome">Sobrenome</label>
        <InputText id="sobrenome" placeholder="Doe" v-model="contactDto.lastName"></InputText>
      </div>

      <div class="field col-12">
        <label for="email">Email</label>
        <InputText id="email" placeholder="johndoe@exemplo.com" v-model="contactDto.email"></InputText>
      </div>

      <div class="field col-12">
        <label for="telefone">Telefone</label>
        <InputMask
          id="telefone"
          placeholder="(81) 90909-9090"
          mask="(99) 99999-9999"
          v-model="contactDto.phone"
        ></InputMask>
      </div>
    </div>

    <div class="flex align-items-center gap-3">
      <Button
        class="flex align-items-center justify-content-center bg-gray-200 border-gray-200 text-black-alpha-90"
        @click="cancelar"
      >
        Cancelar
      </Button>
      <Button @click="save" class="flex align-items-center justify-content-center">
        {{acao == 'ATUALIZAR' ? 'Atualizar' : 'Salvar'}}
      </Button>
    </div>
  </main>
</template>

<script>
import * as singleSpa from 'single-spa';

export default {
  name: "ContactForm",

  props: {
    contact: {
      type: Object,
    },

    acao: {
      type: String
    }
  },

  emits: ["save"],

  data() {
    return {
      contactDto: {
        name: null,
        lastName: null,
        phone: null,
        email: null,
      },
    };
  },

  methods: {
    fillForm() {
      this.contactDto = {
        ...this.contact,
      };
    },

    save() {
      this.$emit("save", this.contactDto);
    },

    cancelar() {
      singleSpa.navigateToUrl('/')
    }
  },

  watch: {
    contact() {
      this.fillForm();
    },
  },
};
</script>