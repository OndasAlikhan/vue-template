<template>
  <component :is="layout">
    {{ this.$route.layout }}
    <router-view/>
    
  </component>
</template>

<script>
// import { useStore } from 'vuex'
import { ref, watch, markRaw } from 'vue'
import { useRoute } from 'vue-router';

import DefaultLayout from './layouts/DefaultLayout'
import LoginLayout from './layouts/LoginLayout'
export default {
  name: 'App',
  components: {
    // new layouts should be added here
    DefaultLayout,
    LoginLayout
  },
  setup() {
    const route = useRoute();

    const layout = ref();
    const getLayout = async (lyt) => {
      const component = await import(`@/layouts/${lyt}`);

      return component.default;
    };

    // Layout change handler
    watch(
      () => route.meta,
      async (meta) => {
        try {
          layout.value = markRaw(await getLayout(meta.layout));
        } catch (e) {
          layout.value = markRaw(await getLayout('LoginLayout'));
        }
      },
    );
    return {
      layout
    }
  }
}
</script>
