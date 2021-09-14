<template>
  <div class="paper-for-login">
    <h1>{{ $t("login-component.title") }}</h1>
    <input type="text" name="email" v-model="input.email" placeholder="Email" />
    <input
      type="text"
      name="password"
      v-model="input.password"
      placeholder="Password"
    />
    <button type="button" v-on:click="login" class="btn">
      {{ $t("login-component.btn") }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const myreg = new RegExp(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
      );

      if (this.input.email != "" && this.input.password != "") {
        if (this.input.email && myreg.test(this.input.password)) {
          //Log in User
          this.$store.commit("logInUser");

          //Create string from date
          let today = new Date();
          let dateString = today.toISOString().substring(0, 10);

          //Save xToken to vuex and localstorage
          const xToken = this.input.email + dateString;

          this.$store.commit("saveToken", xToken);
          window.localStorage.setItem("xToken", xToken);

          //Change route to /weather
          this.$router.push("/weather");
        } else {
          console.log("The email and / or password is incorrect");
        }
      } else {
        console.log("A email and password must be present");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/mixins.scss";

.paper-for-login {
  @include paper;
  display: block;
  margin-top: 8rem;
}

input {
  @include input();
}

.btn {
  @include btn();
}
</style>
