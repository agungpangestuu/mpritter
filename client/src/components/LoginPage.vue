<template>
  <div class="row justify-center login">
    <div class="col-6">
      <q-field
      icon="account_circle"
      label="Your Account"
      helper="Helper"
      :error="mailHasError"
      error-label="We need a valid email"
      :count="10"
      >
      <q-input  v-model="formLogin.email" />
    </q-field>
    <q-field
    icon="cloud"
    label="Your password"
    helper="Helper"
    :error="mailHasError"
    error-label="We need a valid password"
    :count="16"
    >
      <q-input type="password" max-length="16" v-model="formLogin.password" />
    </q-field>
    <div class="row justify-end loginbtn">
      <q-btn icon="create" @click="loginBtn">sign in</q-btn>
    </div>
    </div>
  </div>
</template>

<script>
import {
  QInput,
  QField,
  QBtn
} from 'quasar'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    QInput,
    QField,
    QBtn
  },
  data () {
    return {
      formLogin: {
        email: '',
        password: ''
      },
      mailHasError: false
    }
  },
  methods: {
    ...mapActions([
      'checkLogin',
      'signin'
    ]),
    loginBtn () {
      this.signin(this.formLogin)
      this.$router.push('/')
      if (this.isLogin) {
        this.$router.push('/')
      }
      else {
        this.mailHasError = true
      }
      console.log('blabla')
    }
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  created () {

  }

}
</script>

<style>
  .row.login{
    margin-top: 20px
  }
  .loginbtn {
    padding: 20px;
  }
</style>
