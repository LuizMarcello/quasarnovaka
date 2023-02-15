import useSupabase from "src/boot/supabase";
/* import useAuthUser from "./UseAuthUser"; */

export default function useApi() {
  const { supabase } = useSupabase();
  /* const { user } = useAuthUser(); */

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
      .select("*", )
      .match({
        status: "Funcionamento OK",
      });
    if (error) throw error;
    return data;
  };

  const listaEstoqueDefeito = async (table) => {
    const { error, data, count } = await supabase
      .from(table)
      .select("*", )
      .match({
        status: "Com defeito",
      });
    if (error) throw error;
    return data;
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
    listaEstoqueDefeito,
  };
}
