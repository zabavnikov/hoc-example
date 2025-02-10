import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import './style.css'
import Application from './Application.vue'
import SendingStatisticsInViewport from "./pages/SendingStatisticsInViewport.vue"
import SendingStatisticsByClick from "./pages/SendingStatisticsByClick.vue";
import SendingStatisticsInViewportByClick from "./pages/SendingStatisticsInViewportByClick.vue";
import HighlightText from './pages/HighlightText.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/sending-statistics-viewport', component: SendingStatisticsInViewport },
    { path: '/sending-statistics-click', component: SendingStatisticsByClick },
    { path: '/sending-statistics', component: SendingStatisticsInViewportByClick },
    { path: '/highlight-text', component: HighlightText },
  ],
})

createApp(Application)
  .use(router)
  .mount('#application')
