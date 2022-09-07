import {
  useQuasar
} from 'quasar'

export default function useNotify() {
  const $q = useQuasar()

  /* Para notificar quando tiver algum tipo de sucesso */
  const notifySuccess = (message) => {
    $q.notify({
      type: 'positive',
      message: message || 'Está tudo certo !'
    })
  }


  /* Para notificar quando algo der errado */
  const notifyError = (message) => {
    $q.notify({
      type: 'negative',
      message: message || 'Falhou !'
    })
  }

  return {
    notifySuccess,
    notifyError
  }
}
