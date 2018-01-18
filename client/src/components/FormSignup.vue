<template>
  <div class="row justify-center login">
    <div class="col-6">
      <q-field
      icon="account_circle"
      label="Email"
      helper="Input Your Email"
      :error="mailHasError"
      error-label="We need a valid email"
      :count="10"
      >
      <q-input  v-model="formLogin.email" />
    </q-field>
    <q-field
    icon="cloud"
    label="password"
    helper="Input Your password"
    :error="mailHasError"
    error-label="We need a valid password"
    :count="16"
    >
      <q-input type="password" max-length="16" v-model="formLogin.password" />
    </q-field>
    <q-field
    icon="cloud"
    label="Username"
    helper="Input Your username"
    :error="mailHasError"
    error-label="We need a valid username"
    :count="16"
    >
      <q-input type="text" max-length="16" v-model="formLogin.username" />
    </q-field>
    <q-field
    icon="cloud"
    label="Firstname"
    helper="Input Your Firstname"
    :error="mailHasError"
    error-label="We need a valid Firstname"
    :count="16"
    >
      <q-input type="text" max-length="16" v-model="profile.firstname" />
    </q-field>
    <q-field
    icon="cloud"
    label="Lastname"
    helper="Input Your Lastname"
    :error="mailHasError"
    error-label="We need a valid Lastname"
    :count="16"
    >
      <q-input type="text" max-length="16" v-model="profile.lastname" />
    </q-field>
    <q-field
    icon="cloud"
    label="Bio"
    helper="Input Your Bio"
    :error="mailHasError"
    error-label="We need a valid Bio"
    :count="16"
    >
      <q-input type="text" max-length="16" v-model="profile.bio" />
    </q-field>
    <div class="row justify-end loginbtn">
      <q-btn icon="create" @click="signupBtn">sign up</q-btn>
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
      mailHasError: false,
      formLogin: {
        email: '',
        password: '',
        username: ''
      },
      profile: {
        firstname: '',
        lastname: '',
        bio: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'checkLogin',
      'signup',
      'postProfile'
    ]),
    signupBtn () {
      this.signup(this.formLogin)
      this.postProfile(this.profile)
      this.$router.push('/login')
      if (this.isLogin) {
        this.$router.push('/login')
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
