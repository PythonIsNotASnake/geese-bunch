<template>
    <div :style="{ background: 'white' }">
      <formulate-form v-model="formValues" type="group">
        <fieldset>
            <legend :style="{ color: 'black', marginBottom: '10px' }">Registrieren</legend>
            <formulate-input
            type="email"
            name="email"
            placeholder="beispiel@beispiel.de"
            label="E-Mail-Adresse:"
            validation="email"
            />
            <br />
            <formulate-input
            type="text"
            name="preName"
            placeholder="Gustav"
            label="Vorname:"
            />
            <br />
            <formulate-input
            type="text"
            name="lastName"
            placeholder="Goose"
            label="Nachname:"
            />
            <br />
            <formulate-input
            type="password"
            name="password"
            placeholder="Passwort"
            label="Passwort:"
            />
            <br />
            <formulate-input
            type="password"
            name="repeatPassword"
            placeholder="Passwort wiederholen"
            label="Passwort wiederholen:"
            />
            <br />
            <formulate-input
            v-if="!formValues.email || !formValues.preName || !formValues.lastName || !formValues.password || !formValues.repeatPassword"
            type="submit"
            label="Registrieren"
            @click="register()"
            disabled
            />
            <formulate-input v-else type="submit" label="Registrieren" @click="register()" />
        </fieldset>
      </formulate-form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueFormulate from "@braid/vue-formulate";

export default Vue.extend({
    name: 'Registration',
    data: function () {
    return { formValues: {} };
    },
    methods: {
    register: function () {
      this.$cookies.set('email', this.formValues.email);
      this.$cookies.set('preName', this.formValues.preName);
      this.$cookies.set('lastName', this.formValues.lastName);
      this.$cookies.set('password', this.formValues.password);
      this.$router.push({ path: '/main' });
    }
  }
});
Vue.use(VueFormulate);
</script>

<style scoped>
</style>
