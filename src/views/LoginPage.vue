<template>
  <div class="pa-4">
    <h1 class="px-4">Login</h1>
    <v-container class="px-7">
      <v-form v-model="valid">
        <v-row>
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="Username"
            required
          ></v-text-field>
        </v-row>

        <v-row>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            label="Password"
            required
          ></v-text-field>
        </v-row>
        <v-btn color="primary" class="float-right mt-10" elevation="4" large
          >Login</v-btn
        >
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    username: '',
    show: false,
    password: '',
    usernameRules: [
      (v) => !!v || 'Username is required',
      (v) => v.length <= 20 || 'Username must be less than 20 characters',
    ],
    passwordRules: [(v) => !!v || 'Password is required'],
  }),
};
</script>
