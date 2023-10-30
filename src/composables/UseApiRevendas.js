import useSupabase from "src/boot/supabase";
import useAuthUser from "./UseAuthUser";

export default function useApiRevendas() {
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

  const post = async (table, form) => {
    const { data, error } = await supabase.from(table).insert({
      ...form,

      /* Passando o valor do id do usuário logado no momento,
           para o "user_id" da tabela, no supabase, porque este
           será o usuário que efetuou o registro */
      /* user_id: user.value.id, */
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

  const listaaprovada = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        status: "Aprovado",
      });
    if (error) throw error;
    return data;
  };


  const listareprovada = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        status: "Não Aprovado",
      });
    if (error) throw error;
    return data;
  };

  const emanalise = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        status: "Em análise",
      });
    if (error) throw error;
    return data;
  };

  const compendencias = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        status: "Com pendências",
      });
    if (error) throw error;
    return data;
  };

  return {
    listaaprovada,
    listareprovada,
    compendencias,
    emanalise,
    list,
    getById,
    post,
    update,
    remove,
  };
}
