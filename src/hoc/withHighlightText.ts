import { h } from "@vue/runtime-core"
import { type Ref, watch } from 'vue'

function withHighlightText(WrappedComponent, text: Ref<string>) {
  return {
    setup() {
      let nodes: HTMLElement[] = []

      watch(() => text.value, (value) => {
        nodes.forEach((node) => {
          if (value.length) {
            node.innerHTML = node.innerText
              .replaceAll(
                new RegExp(`(${value})`, 'gi'),
                '<span style="background-color: lightgoldenrodyellow; color: black;">$1</span>'
              )
          } else {
            node.innerHTML = node.innerText
          }
        })
      })

      return () => h(WrappedComponent, {
        onVnodeMounted({ el }) {
          nodes = el.querySelectorAll('h2, p')
        },
      });
    }
  }
}

export default withHighlightText