<template>
  <v-layout>
    <Sidebar />
    <Header />
    <v-main>
      <!-- <v-card height="200px"></v-card> -->
      <slot />
    </v-main>
  </v-layout>
</template>
<script>
import { onMounted } from 'vue'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
export default {
  name: 'LayoutDefault',
  components: {
    Header,
    Sidebar,
  },
  setup() {
    onMounted(() => {console.log('Mounted layout')})
  }
}
</script>