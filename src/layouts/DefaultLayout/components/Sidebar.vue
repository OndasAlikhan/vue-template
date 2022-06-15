<template>
  <v-navigation-drawer 
    color="grey-darken-2"
    permanent
    :rail="drawer"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="John Leider"
    >
      <!-- <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template> -->
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Sidebar',
  setup() {
    const store = useStore()
    const drawer = computed(() => store.getters['app/sidebar']);
    return {
      drawer
    }
  }
}
</script>