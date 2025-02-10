<template>
  <div class="grid grid-cols-12">
    <div class="col-span-4">
      <ul class="top-10 sticky space-y-4">
        <li>
          <RouterLink to="/sending-statistics-viewport">
            <span>Отправка статистики</span>
            <span class="block text-sm text-neutral-500">Если элемент во вьюпорте</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/sending-statistics-click">
            <span>Отправка статистики</span>
            <span class="block text-sm text-neutral-500">По клику</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/sending-statistics">
            <span>Отправка статистики</span>
            <span class="block text-sm text-neutral-500">Если элемент во вьюпорте + по клику</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/highlight-text">
            <span>Подсветка текста</span>
            <span class="block text-sm text-neutral-500">Подсветка текст при поиске</span>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="col-span-8">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>