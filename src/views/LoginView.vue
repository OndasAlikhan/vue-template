<template>
  <div>
    s
  </div>
</template>
<script>
import useApi from '@/api/useApi'
export default {
  name: 'LoginView',
  setup() {
    console.log('in login view')
    const userApi = useApi('user')
    console.log('userApi', userApi)
    userApi.getInfo({hehe:'haha'})
  }
}
</script>