import useSupabase from "src/boot/supabase";
//import useAuthUser from "./UseAuthUser";

export default function useApi() {
  const { supabase } = useSupabase();
  //const { user } = useAuthUser();

  const estoqueAntena = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        tipo_equipamento: "Antena",
      });
    if (error) throw error;
    return count;
  };

  const estoqueBuc = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        tipo_equipamento: "Buc",
      });
    if (error) throw error;
    return count;
  };

  const estoqueModem = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        tipo_equipamento: "Modem",
      });
    if (error) throw error;
    return count;
  };

  const estoqueEtria = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        tipo_equipamento: "Etria",
      });
    if (error) throw error;
    return count;
  };

  const estoqueFonte = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        tipo_equipamento: "Fonte",
      });
    if (error) throw error;
    return count;
  };

  const estoqueGroove = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        tipo_equipamento: "Groove",
      });
    if (error) throw error;
    return count;
  };

  const estoqueIlb = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        tipo_equipamento: "Ilb",
      });
    if (error) throw error;
    return count;
  };

  const estoqueLnb = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        tipo_equipamento: "Lnb",
      });
    if (error) throw error;
    return count;
  };

  const estoqueRadio = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        tipo_equipamento: "Rádio",
      });
    if (error) throw error;
    return count;
  };

  const estoqueRoteador = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        tipo_equipamento: "Roteador",
      });
    if (error) throw error;
    /* return count; */
    return count;
  };

  const listaEstoqueOk = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
      })
      .match({
        status: "Funcionamento OK",
      });
    if (error) throw error;
    return data;
  };

  const listaEstoqueOkCount = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        status: "Funcionamento OK",
      });
    if (error) throw error;
    return count;
  };

  const listaEstoqueDefeito = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*")
      .match({
        status: "Com defeito",
      });
    if (error) throw error;
    return data;
  };

  const listaEstoqueDefeitoCount = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        status: "Com defeito",
      });
    if (error) throw error;
    return count;
  };

  const listaEstoqueGarantia = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*")
      .match({
        status: "Enviado para garantia",
      });
    if (error) throw error;
    return data;
  };

  const listaEstoqueGarantiaCount = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        status: "Enviado para garantia",
      });
    if (error) throw error;
    return count;
  };

  const listaEstoqueEstoque = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*")
      .match({
        status: "Na Bentley",
      });
    if (error) throw error;
    return data;
  };

  const listaEstoqueEstoqueCount = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        status: "Na Bentley",
      });
    if (error) throw error;
    return count;
  };

  const listaEstoqueCliente = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*")
      .match({
        status: "No cliente",
      });
    if (error) throw error;
    return data;
  };

  const listaEstoqueClienteCount = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      })
      .match({
        status: "No cliente",
      });
    if (error) throw error;
    return count;
  };

  return {
    estoqueAntena,
    estoqueBuc,
    estoqueModem,
    estoqueEtria,
    estoqueFonte,
    estoqueGroove,
    estoqueIlb,
    estoqueLnb,
    estoqueRadio,
    estoqueRoteador,
    listaEstoqueOk,
    listaEstoqueOkCount,
    listaEstoqueDefeito,
    listaEstoqueDefeitoCount,
    listaEstoqueGarantia,
    listaEstoqueGarantiaCount,
    listaEstoqueEstoque,
    listaEstoqueEstoqueCount,
    listaEstoqueCliente,
    listaEstoqueClienteCount,
  };
}
