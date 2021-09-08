<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="email" v-model="input.email" placeholder="Email" />
    <input
      type="text"
      name="password"
      v-model="input.password"
      placeholder="Password"
    />
    <button type="button" v-on:click="login()">Login</button>
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
          this.$router.push('/weather')
          console.log(window.localStorage.getItem("xToken"))
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

<style scoped>
#login {
  width: 35rem;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 5rem;
  padding: 2rem;
}
</style>
