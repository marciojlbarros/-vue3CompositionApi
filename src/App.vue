<template>
  <div class="container grid-lg my-2 py-2">
    <div class="card">
      <div class="card-header">
        <div class="card-title h3 text-center">
          API de Cotações de Moedas
        </div>
        <div class="card-subtitle text-gray  text-center">
          API de Cotações, agora com mais de 150 moedas diferentes!
        </div>
        <div class="card-body">
          <ListQuotes :quotes="quotes"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import api from "@/services/api";
import ListQuotes from "./components/ListQuotes.vue";

export default {
  name: "App",
  components:{ 
    ListQuotes
  },
  setup() {
    const data = reactive({
      quotes: {},
    });

    onMounted(async () => {
      const response = await api.all()
      data.quotes = response.data;
    })

    return { ...toRefs(data) };
  },
};
</script>
