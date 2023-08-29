import useSupabase from "src/boot/supabase";
import useAuthUser from "./UseAuthUser";

export default function useApiClientes() {
  const { supabase } = useSupabase();
  const { user } = useAuthUser();

  const listaativo = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        status: "Ativo",
      });
    if (error) throw error;
    return data;
  };

  const listainativo = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        status: "Inativo",
      });
    if (error) throw error;
    return count;
  };

  const listaaguardando = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        status: "Aguardando",
      });
    if (error) throw error;
    return count;
  };

  return {
    listaativo,
    listainativo,
    listaaguardando
  };
}
