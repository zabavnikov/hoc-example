<script setup lang="ts">
import withSendingStatisticsByClick from "../hoc/withSendingStatisticsByClick.ts";
import Card from "../components/Card.vue";

const CardWithStatistic = withSendingStatisticsByClick(Card)
</script>

<template>
  <div>
    <CardWithStatistic />
  </div>
</template>