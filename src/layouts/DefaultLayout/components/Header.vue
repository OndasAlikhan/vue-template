<template>
  <v-app-bar color="grey-lighten-2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="toggleSidebar"></v-app-bar-nav-icon>
    </template>
  
    <v-app-bar-title>Photos</v-app-bar-title>
    <router-link to="/">
      <v-btn>
        Home
      </v-btn>
    </router-link>
    <router-link to="/appeals">
      <v-btn>
        Appeals
      </v-btn>
    </router-link>
    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'Header',
  setup() {
    const store = useStore()
    const toggleSidebar = () => {
      console.log('clicked')
      store.dispatch('app/toggleSidebar')
    }

    return {
      toggleSidebar
    }
  }
}
</script>