<template>
    <div id="sub-el">
        <h1>Bitcoin Price Index</h1>
        <div
            v-for="currency in info"
            class="currency"
        >
    {{ currency.description }}:
    <span class="lighten">
      <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
    </span>
  </div>
</div>
</template>


<script lang="ts">
import axios from "axios"
const api = import.meta.env.VITE_DA_API_KEY

export default {
  el: '#sub-el',
    props: {
    element: { type: Object, required: true },
  },
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },

  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.item.data_types.elements))
  }
})
</script>

