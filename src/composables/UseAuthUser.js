/* Este "composable" é como se fosse os "mixins" anteriores */
import {
  ref
} from 'vue'

/* Importando o "supabase" */
import useSupabase from 'boot/supabase'

/* Este é um "estado global(usuário global)".
   Quem importar este "composable", terá
   acesso a este usuário "user" */
const user = ref(null)

/* Toda lógica deste composable */
export default function useAuthUser() {
  const {
    supabase
  } = useSupabase()

  /* Fazendo login */
  const login = async ({
    email,
    password
  }) => {
    const {
      user,
      error
    } = await supabase.auth.signIn({
      email,
      password
    })
    if (error) throw error
    return user
  }

  /* Login através de redes sociais */
  const loginWithSocialProvider = async (provider) => {
    const {
      user,
      error
    } = await supabase.auth.signIn({
      provider
    })
    if (error) throw error
    return user
  }

  /* Fazendo logout */
  const logout = async () => {
    const {
      error
    } = await supabase.auth.signOut()
    if (error) throw error
  }

  /* Para saber se está logado */
  const isLoggedIn = () => {
    return !!user.value
  }

  /* Registrar novos usuários */
  const register = async ({
    email,
    password,
    ...meta
  }) => {
    const {
      user,
      error
    } = await supabase.auth.signUp({
      email,
      password
    }, {
      data: meta,
      redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation`
    })
    if (error) throw error
    return user
  }

  /* Método de update, para atualizar alguma informação */
  const update = async (data) => {
    const {
      user,
      error
    } = await supabase.auth.update(data)
    if (error) throw error
    return user
  }

  /* resetar a senha */
  const sendPasswordRestEmail = async (email) => {
    const {
      user,
      error
    } = await supabase.auth.api.resetPasswordForEmail(email)
    if (error) throw error
    return user
  }

  /* Este return é devido ao vuejs 3 */
  return {
    user,
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordRestEmail
  }

}
