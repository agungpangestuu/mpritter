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
          <q-side-link item to="/login">
            <q-item-side icon="rss feed" />
            <q-item-main label="Login" sublabel="have a account" />
          </q-side-link>
          <q-side-link item to="/formsign">
            <q-item-side icon="rss feed" />
            <q-item-main label="SignUp" sublabel="if not have a account" />
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
  }
}
</script>

<style>
</style>
