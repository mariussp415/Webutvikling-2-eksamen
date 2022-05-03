<template>
<the-navigation></the-navigation>
<router-view/>
</template>

<script>

import TheNavigation from "./components/shared/TheNavigation.vue"

export default {
  components: {
    TheNavigation
  }
}
</script>

<style>
nav {
  padding: 30px;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
