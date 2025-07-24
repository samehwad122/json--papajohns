import { useState, useEffect, createContext } from "react";
import { createClient } from "@supabase/supabase-js";

export const apiContext = createContext();

const supabaseUrl = "https://jjakrlnnflootsgdzwpb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqYWtybG5uZmxvb3RzZ2R6d3BiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNTcwMjYsImV4cCI6MjA2ODgzMzAyNn0.97AFydLJk3NgsHk2Q6cOndlAIMMw4LtQHaB7H9yIoAM";
const supabase = createClient(supabaseUrl, supabaseKey);

export const ApiContextProvider = ({ children }) => {
  const [allPostars, setAllpostars] = useState([]);
  const [allPizzas, setAllPizzas] = useState([]);
  const [appetizers, setAllAppetizers] = useState([]);
  const [desserts, setAllDesserts] = useState([]);
  const [crunchy, setAllCrunchy] = useState([]);
  const [branches, setBranches] = useState([]);

  const getAllPostars = async () => {
    try {
      const { data, error } = await supabase.from("postars").select("*");
      if (error) throw error;
      setAllpostars(data);
true
    } catch (error) {
      setAllpostars([]);
    }
  };

  const getAllPizzas = async () => {
    try {
      const { data, error } = await supabase.from("pizzas").select("*");
      if (error) throw error;
      setAllPizzas(data);
    } catch (error) {
      setAllPizzas([]);
    }
  };

  const getAllAppetizers = async () => {
    try {
      const { data, error } = await supabase.from("appetizers").select("*");
      if (error) throw error;
      setAllAppetizers(data);
    } catch (error) {
      setAllAppetizers([]);
    }
  };

  const getAllDesserts = async () => {
    try {
      const { data, error } = await supabase.from("desserts").select("*");
      if (error) throw error;
      setAllDesserts(data);
    } catch (error) {
      setAllDesserts([]);
    }
  };

  const getAllCrunchy = async () => {
    try {
      const { data, error } = await supabase.from("crunchy").select("*");
      if (error) throw error;
      setAllCrunchy(data);
    } catch (error) {
      setAllCrunchy([]);
    }
  };

  const getAllBranches = async () => {
    try {
      const { data, error } = await supabase.from("branches").select("*");
      if (error) throw error;
      setBranches(data);
    } catch (error) {
      setBranches([]);
    }
  };

  useEffect(() => {
    getAllPostars();
    getAllPizzas();
    getAllAppetizers();
    getAllDesserts();
    getAllCrunchy();
    getAllBranches();
  }, []);

  return (
    <apiContext.Provider
      value={{
        allPostars,
        allPizzas,
        appetizers,
        desserts,
        crunchy,
        branches,
      }}
    >
      {children}
    </apiContext.Provider>
  );
};
