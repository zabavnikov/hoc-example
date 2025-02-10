<script setup lang="ts">
import withHighlightText from "../hoc/withHighlightText.ts";
import Card from "../components/Card.vue";
import Card2 from "../components/Card2.vue";
import { ref } from 'vue'

const text = ref('')
const CardHighlightText = withHighlightText(Card, text)
const Card2HighlightText = withHighlightText(Card2, text)
</script>

<template>
  <div class="space-y-4">
    <input placeholder="Поиск" type="text" v-model="text" class="bg-black/50 p-4 border block w-full">

    <CardHighlightText />
    <Card2HighlightText />
  </div>
</template>