<script setup lang="ts">
import withSendingStatisticsInViewport from "../hoc/withSendingStatisticsInViewport.ts";
import Card from "../components/Card.vue";

const CardWithStatistic = withSendingStatisticsInViewport(Card)
</script>

<template>
  <div>
    <div class="h-[1024px]"></div>
    <CardWithStatistic />
    <div class="h-[1024px]"></div>
    <CardWithStatistic />
    <div class="h-[1024px]"></div>
  </div>
</template>