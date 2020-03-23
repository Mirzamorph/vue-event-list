<template>
  <div>
    <h4>
      Your page was't found, you can go to the main page on the link below
    </h4>
    <router-link :to="{ name: 'event-list' }">Main page</router-link>
  </div>
</template>

<script>
export default {}
</script>
