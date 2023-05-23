<template>
  <v-container class="kardiology-container">
    <div class="kardiology-header">
      <v-icon class="kardiology-icon"> </v-icon>
      <h1 class="kardiology-title">
        <v-icon style="color: #7a00cc" size="3rem">mdi-heart-pulse</v-icon
        >Kardiology
      </h1>
    </div>

    <p class="kardiology-subtitle">Create New Account</p>

    <v-form>
      <v-text-field
        style="color: #7a00cc"
        label="Username"
        hint="Enter your email address"
        class="custom-text-field"
        required
        filled
      ></v-text-field>

      <v-text-field
        style="color: #7a00cc"
        label="Password"
        type="password"
        required
        filled
        append-icon="mdi-eye-off"
        hint="Enter your password"
      ></v-text-field>
      <v-text-field
        style="color: #7a00cc"
        label="Confirm Password"
        type="password"
        filled
        append-icon="mdi-eye-off"
        hint="Retype your password to confirm"
        required
      ></v-text-field>

      <div class="kardiology-checkbox">
        <v-checkbox color="#7a00cc" value="indigo" hide-details></v-checkbox>
        <p style="font-size: small">
          I agree to the Terms of Service and the Privacy Policy including the
          Cookie Use statement.
        </p>
      </div>

      <v-btn
        class="kardiology-btn"
        style="background-color: #7a00cc"
        type="submit"
        color="primary"
        >Join Kardiology</v-btn
      >
      <p class="kardiology-login">Already a member? <a href="#">Login</a></p>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "KardiologySignup",
})
export default class KardiologySignup extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.kardiology-container {
  width: 100%;
  max-width: 800px;
  padding: 5% 12% 5% 12%;
  box-shadow: 0 2px 5px black;
  border-radius: 8px;
}

.kardiology-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.kardiology-title {
  color: #7a00cc;
  font-size: 2rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.kardiology-subtitle {
  color: #7a00cc;
  margin: 1.5rem 0 1.5rem 0;
  font-size: x-large;
  font-weight: 600;
}

.kardiology-checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.kardiology-checkbox p {
  padding: 21px 0 0 10px;
  text-align: left;
}

.kardiology-btn {
  margin-top: 1.5rem;
  width: 100%;
  color: black;
  border-radius: 20px;
}

.kardiology-login {
  margin-top: 1.5rem;
}

.custom-text-field .v-label {
  transform: translateY(-10px) scale(0.75);
  color: #7a00cc;
}
</style>
