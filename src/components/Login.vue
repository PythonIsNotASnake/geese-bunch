<template>
    <div :style="{ background: '#ffffff65' }">
      <FormulateForm v-model="formValues" type="group">
        <fieldset>
          <legend :style="{ color: 'black', marginBottom: '10px' }">Anmelden</legend>
          <FormulateInput
            type="email"
            name="email"
            placeholder="beispiel@beispiel.de"
            label="E-Mail-Adresse:"
            validation="email"
          />
          <br />
          <FormulateInput
            type="password"
            name="password"
            placeholder="Passwort"
            label="Passwort:"
          />
          <br />
          <FormulateInput
            v-if="formValues.email || formValues.password"
            type="submit"
            label="Anmelden"
            @click="loggingIn()"
            disabled
          />
          <FormulateInput v-else type="submit" label="Anmelden" @click="loggingIn()" />
        </fieldset>
      </FormulateForm>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueFormulate from "@braid/vue-formulate";

Vue.use(VueFormulate);

export default Vue.extend({
    name: 'Login',
    props: ['userName'],
    data: function () {
    return { formValues: {} };
  },
  methods: {
    loggingIn: function () {
      this.$cookies.set('email', this.formValues.email);
      this.$cookies.set('password', this.formValues.password);
      this.$router.push({ path: '/main' });
    }
  }
});
</script>

<style scoped>

</style>
