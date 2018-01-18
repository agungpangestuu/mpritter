<template>
  <div>
    <q-layout ref="layout" view="hHr LpR fFf" :right-breakpoint="1100">
      <!-- Header -->
      <q-toolbar slot="header">
        <q-btn flat @click="$refs.layout.toggleLeft()">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          M Priter
          <span slot="subtitle">Mini Tweet</span>
        </q-toolbar-title>

      </q-toolbar>
      <!-- Navigation -->

      <!-- Left Side Panel -->
      <div slot="left">
        <q-list no-border link inset-separator>
          <q-list-header>Menu</q-list-header>
          <q-side-link item to="/">
            <q-item-side icon="rss feed" />
            <q-item-main label="Home" sublabel="if not have a account" />
          </q-side-link>
          <q-side-link item to="/profile">
            <q-item-side icon="rss feed" />
            <q-item-main label="Profile" sublabel="if not have a account" />
          </q-side-link>
          <q-side-link item to="/login" v-if="isLogin">
            <q-item-side icon="rss feed" />
            <q-item-main label="Login" sublabel="have a account" />
          </q-side-link>
          <q-side-link item to="/formsign" v-if="isLogin">
            <q-item-side icon="rss feed" />
            <q-item-main label="SignUp" sublabel="if not have a account" />
          </q-side-link>
          <q-side-link item to="/" v-if="!isLogin" @click="logout">
            <q-item-side icon="rss feed" />
            <q-item-main label="Logout" sublabel="if not have a account" />
          </q-side-link>
        </q-list>
      </div>
      <!-- sub-routes get injected here: -->
      <router-view />
      <!-- Footer -->
      <q-toolbar slot="footer">
        <q-toolbar-title>
          Layout Footer
        </q-toolbar-title>
      </q-toolbar>
    </q-layout>
  </div>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea
} from 'quasar'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  methods: {
    ...mapActions([
      'checkLogin',
      'logout'
    ])
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style>
</style>
