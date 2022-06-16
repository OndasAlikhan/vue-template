<template>
  <v-navigation-drawer 
    permanent
    color="grey-lighten-2"
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
      <v-list-item title="Все обращения" value="home"></v-list-item>
      <v-list-item title="Мои обращения" value="account"></v-list-item>
      <v-list-item title="Аналитика" value="users"></v-list-item>
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