import { h } from "@vue/runtime-core"
import { ref } from 'vue'

function withSendingStatisticsByClick(WrappedComponent) {
  return {
    setup() {
      const isSent = ref(false)

      return () => h(WrappedComponent, {
        onClick: () => {
          if (! isSent.value) {
            alert('Данные отправлен на сервер.')
            isSent.value = true
          }
        }
      })
    }
  }
}

export default withSendingStatisticsByClick