<script setup lang="ts">
import withSendingStatisticsInViewport from "../hoc/withSendingStatisticsInViewport.ts";
import withSendingStatisticsByClick from "../hoc/withSendingStatisticsByClick.ts";
import Card from "../components/Card.vue";

const CardWithStatistic = withSendingStatisticsByClick(
  withSendingStatisticsInViewport(Card)
)
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