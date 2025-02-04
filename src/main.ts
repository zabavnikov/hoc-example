import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import './style.css'
import Application from './Application.vue'
import SendingStatisticsInViewport from "./pages/SendingStatisticsInViewport.vue"
import SendingStatisticsByClick from "./pages/SendingStatisticsByClick.vue";
import SendingStatisticsInViewportByClick from "./pages/SendingStatisticsInViewportByClick.vue";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/sending-statistics-viewport', component: SendingStatisticsInViewport },
    { path: '/sending-statistics-click', component: SendingStatisticsByClick },
    { path: '/sending-statistics', component: SendingStatisticsInViewportByClick },
  ],
})

createApp(Application)
  .use(router)
  .mount('#application')
