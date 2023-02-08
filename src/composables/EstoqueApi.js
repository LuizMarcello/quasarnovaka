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
        status: "Antena",
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
        status: "Buc",
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
        status: "Modem",
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
        status: "Etria",
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
        status: "Fonte",
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
        status: "Groove",
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
        status: "Ilb",
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
        status: "Lnb",
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
        status: "Rádio",
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
        status: "Roteador",
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
    estoqueRoteador
  };
}
