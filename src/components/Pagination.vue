<template>
  <div class="nav">
    <router-link v-if="prevPage" :to="{ query: { page: prevPage } }">
      Prev
    </router-link>
    <span v-if="nextPage && prevPage"> | </span>
    <router-link v-if="nextPage" :to="{ query: { page: nextPage } }">
      Next
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number
    }
  },
  data() {
    return {
      currentPage: +this.$route.query.page || 1
    }
  },
  computed: {
    prevPage() {
      return this.currentPage - 1 === 0 ? null : this.currentPage - 1
    },
    nextPage() {
      return this.currentPage + 1 > this.totalPages
        ? null
        : this.currentPage + 1
    }
  }
}
</script>
