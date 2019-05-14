const blur = {}

// comunmente son 4 valores:
// "el" elemento html,
// "binding" tiene información al valor que se le esta pasando a la directiva,
// "newNode" referencia al nodo virtual DOM
// ""oldNode" rererencia al nodo anterior del virtual DOM
function setBlur (el, binding) {
  el.style.filter = !binding.value ? 'blur(3px)' : 'none'
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'
  el.querySelectorAll('button').forEach(button => {
    if (!binding.value) {
      button.setAttribute('disabled', true)
    } else {
      button.removeAttribute('disabled')
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
