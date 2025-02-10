import { h } from "@vue/runtime-core"
import { useElementVisibility } from '@vueuse/core'
import { ref, watch } from 'vue'

function withSendingStatisticsInViewport(WrappedComponent) {
  return {
    setup() {
      const target = ref(null)
      const targetIsVisible = useElementVisibility(target)

      watch(targetIsVisible, (isVisible) => {
        if (isVisible) {
          alert('Данные отправлен на сервер.')
        }
      }, {
        once: true
      })

      return () => h(WrappedComponent, {
        ref: target,
      })
    }
  }
}

export default withSendingStatisticsInViewport