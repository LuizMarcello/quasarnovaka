import useSupabase from "src/boot/supabase";
import useAuthUser from "./UseAuthUser";

export default function useApi() {
  const { supabase } = useSupabase();
  const { user } = useAuthUser();

  const list = async (table) => {
    const { data, error } = await supabase.from(table).select("*");

    if (error) throw error;
    return data;
  };

  const getById = async (table, id) => {
    const { data, error } = await supabase.from(table).select("*").eq("id", id);
    if (error) throw error;
    return data[0];
  };

  const getByBrCode = async (table, bar_code) => {
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .eq("bar_code", bar_code);
    if (error) throw error;
    return data[0];
  };

  const post = async (table, form) => {
    const { data, error } = await supabase.from(table).insert({
      ...form,

      /* Passando o valor do id do usuário logado no momento,
           para o "user_id" da tabela, no supabase, porque este
           será o usuário que efetuou o registro */
      user_id: user.value.id,
    });
    if (error) throw error;
    return data;
  };

  const update = async (table, form) => {
    const { data, error } = await supabase
      .from(table)
      .update([
        {
          ...form,
        },
      ])
      .match({
        id: form.id,
      });
    if (error) throw error;
    return data;
  };

  const remove = async (table, id) => {
    const { data, error } = await supabase.from(table).delete().match({
      id,
    });
    if (error) throw error;
    return data;
  };

  const statusTotal = async (table) => {
    const { error, data, count } = await supabase.from(table).select("*", {
      count: "exact",
      head: true,
    });
    if (error) throw error;
    return count;
  };

  const statusAtivo = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        status: "Ativo",
      })
      .gt("views", 1000);
    if (error) throw error;
  };

  const statusAguardando = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        status: "Aguardando",
      })
      .gt("views", 1000);
    if (error) throw error;
  };

  const statusInativo = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        status: "Inativo",
      })
      .gt("views", 1000);
    if (error) throw error;
  };

  return {
    list,
    getById,
    getByBrCode,
    post,
    update,
    remove,
    statusTotal,
    statusAtivo,
    statusAguardando,
    statusInativo,
  };
}
