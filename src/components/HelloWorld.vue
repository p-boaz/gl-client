<template>
  <div>
    <h2> Filter LearnVue Articles </h2>
    <input
      v-model="query"
      type="text"
      placeholder="Filter Search"
    />
    <br>
    <button @click="reset">
      Reset
    </button>
    <search-results :query="query" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import SearchResults from './SearchResults.vue'
export default {
  components: {
    SearchResults,
  },
  setup() {
    const query = ref('')
    const reset = (evt) => {
      query.value = '' // clears the query
    }

    return {
      reset,
      query,
    }
  },
}
</script>

<style>
  input[type='text'] {
    margin-bottom: 20px;
    padding: 10px;
  }
</style>
