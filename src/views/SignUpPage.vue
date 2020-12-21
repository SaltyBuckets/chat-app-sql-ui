<template>
  <div class="pa-4">
    <h1 class="px-4">Create a new account</h1>
    <div>
      <v-container class="px-7">
        <v-form v-model="valid">
          <v-row>
            <v-text-field
              v-model="username"
              :rules="usernameRules"
              :counter="20"
              label="Username"
              required
            ></v-text-field
          ></v-row>

          <v-row>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              hint="At least 5 characters"
              @click:append="show1 = !show1"
              required
            ></v-text-field
          ></v-row>
          <v-row>
            <v-text-field
              v-model="password2"
              :rules="passwordRules2"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              label="Confirm Password"
              @click:append="show2 = !show2"
              required
            ></v-text-field
          ></v-row>

          <v-btn
            color="primary"
            class="float-right mt-10"
            elevation="4"
            large
            @click="submit"
            >Log in</v-btn
          >
        </v-form>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    show1: false,
    show2: false,
    username: '',
    password: '',
    password2: '',
    usernameRules: [
      (v) => !!v || 'Username is required',
      (v) => v.length <= 20 || 'Username must be less than 20 characters',
    ],
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => v.length >= 5 || 'Password must be 5 characters or more',
    ],
    passwordRules2: [
      (v) => !!v || 'Please confirm Password',
      (v) => v == password || 'Passwords must match ',
    ],
  }),

  methods: {
    submit: function() {
      if (
        this.username &&
        this.username.length <= 20 &&
        this.password &&
        this.password.length >= 5 &&
        this.password == this.password2
      ) {
      }
    },
  },
};
</script>
