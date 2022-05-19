<template>
  <div class="container">
    <h1 class="title is-3">Fun With AI</h1>
    <RequestForm />
  </div>
</template>

<script>
import RequestForm from "../components/RequestForm.vue";
export default {
  name: "IndexPage",
  components: { RequestForm },
};
</script>

<style scoped>
.container {
  margin-top: 3em;
  max-width: 50%;
}
</style>
