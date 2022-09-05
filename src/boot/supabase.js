import {
  createClient
} from "@supabase/supabase-js";

import useAuthUser from "src/composables/UseAuthUser";

const supabaseUrl = 'https://shgydekzsmsygqsulbma.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoZ3lkZWt6c21zeWdxc3VsYm1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE5Nzc0MDMsImV4cCI6MTk3NzU1MzQwM30.0ldS7sm9QKcAiUUSUkxrwlPbev2qn42ytZ5VhJVenKs'
const supabase = createClient(supabaseUrl, supabaseKey)

/* console.log('init supabase:', supabase) */

/* Atualizando qualquer modificação no estado deste usuário */
supabase.auth.onAuthStateChange((event, session) => {
  const {
    user
  } = useAuthUser()

  user.value = session?.user || null
})


export default function useSupabase() {
  return {
    supabase
  }
}
