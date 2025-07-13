<template>
  <b-modal
    :visible="true"
    title="Formulario de Inscripción"
    @close="$emit('close')"
    ok-only
    ok-title="Enviar"
    @ok="submitForm"
  >
    <b-form @submit.prevent="submitForm">
      <b-form-group label="Nombre" label-for="name">
        <b-form-input id="name" v-model="form.name" required />
      </b-form-group>
      <b-form-group label="Correo" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" required />
      </b-form-group>
      <b-form-group label="Teléfono" label-for="phone">
        <b-form-input id="phone" v-model="form.phone" type="tel" required />
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  name: 'LeadForm',
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    submitForm () {
      console.log('Formulario enviado:', this.form)
      this.$emit('close')
      this.form = { name: '', email: '', phone: '' }
    }
  }
}
</script>

<style scoped>
.b-form-group {
  margin-bottom: 15px;
}
</style>
