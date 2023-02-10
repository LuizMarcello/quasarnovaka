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
      });
    if (error) throw error;
    return count;
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
      });
    if (error) throw error;
    return count;
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
      });
    if (error) throw error;
    return count;
  };

  const revendasAprovadas = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        status: "Aprovado",
      });
    if (error) throw error;
    return count;
  };

  const revendasReprovadas = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        status: "Não Aprovado",
      });
    if (error) throw error;
    return count;
  };

  const revendasAguardando = async (table) => {
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

  const revendasPendencia = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        status: "Com pendências",
      });
    if (error) throw error;
    return count;
  };

  const handleListAntena = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        tipo_equipamento: "Antena",
      });
    if (error) throw error;
    return data;
  };

  const handleListBuc = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        tipo_equipamento: "Buc",
      });
    if (error) throw error;
    return data;
  };

  const handleListModem = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        tipo_equipamento: "Modem",
      });
    if (error) throw error;
    return data;
  };

  const handleListEtria = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        tipo_equipamento: "Etria",
      });
    if (error) throw error;
    return data;
  };

  const handleListFonte = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        tipo_equipamento: "Fonte",
      });
    if (error) throw error;
    return data;
  };

  const handleListGroove = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        tipo_equipamento: "Groove",
      });
    if (error) throw error;
    return data;
  };

  const handleListIlb = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        tipo_equipamento: "Ilb",
      });
    if (error) throw error;
    return data;
  };

  const handleListLnb = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        tipo_equipamento: "Lnb",
      });
    if (error) throw error;
    return data;
  };

  const handleListRadio = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        tipo_equipamento: "Rádio",
      });
    if (error) throw error;
    return data;
  };

  const handleListRoteador = async (table) => {
    const { error, data } = await supabase
      .from(table)
      .select("*")
      .match({
        tipo_equipamento: "Roteador",
      });
    if (error) throw error;
    return data;
  };

  /*  const list = async (table) => {
     const {
       data,
       error
     } = await supabase.from(table).select("*");

     if (error) throw error;
     return data;
   }; */

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
    revendasAprovadas,
    revendasReprovadas,
    revendasAguardando,
    revendasPendencia,
    handleListAntena,
    handleListBuc,
    handleListModem,
    handleListEtria,
    handleListFonte,
    handleListGroove,
    handleListIlb,
    handleListLnb,
    handleListRadio,
    handleListRoteador
  };
}
