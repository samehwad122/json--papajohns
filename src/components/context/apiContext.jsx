import { useState, useEffect, createContext } from "react";
import { createClient } from "@supabase/supabase-js";

// ✅ إنشاء الكونتكست
export const apiContext = createContext();

// ✅ إعداد Supabase
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

  // ✅ جلب بيانات بوسترات من Supabase
  const getAllPostars = async () => {
    try {
      const { data, error } = await supabase.from("postars").select("*");
      if (error) throw error;
      setAllpostars(data);
      console.log(data); // لازم تشوف Array فيها بيانات
true
    } catch (error) {
      console.error("خطأ أثناء جلب البوسترات:", error.message);
      setAllpostars([]);
    }
  };

  // ✅ جلب بيانات بيتزات من Supabase
  const getAllPizzas = async () => {
    try {
      const { data, error } = await supabase.from("pizzas").select("*");
      if (error) throw error;
      setAllPizzas(data);
    } catch (error) {
      console.error("خطأ أثناء جلب البيتزات:", error.message);
      setAllPizzas([]);
    }
  };

  // ✅ جلب بيانات المقبلات من JSON Server
  const getAllAppetizers = async () => {
    try {
      const { data, error } = await supabase.from("appetizers").select("*");
      if (error) throw error;
      setAllAppetizers(data);
    } catch (error) {
      console.error("خطأ أثناء جلب البيتزات:", error.message);
      setAllAppetizers([]);
    }
  };

  // ✅ جلب بيانات الحلويات من JSON Server
  const getAllDesserts = async () => {
    try {
      const { data, error } = await supabase.from("desserts").select("*");
      if (error) throw error;
      setAllDesserts(data);
    } catch (error) {
      console.error("خطأ أثناء جلب البيتزات:", error.message);
      setAllDesserts([]);
    }
  };

  // ✅ جلب بيانات المقرمشات من JSON Server
  const getAllCrunchy = async () => {
    try {
      const { data, error } = await supabase.from("crunchy").select("*");
      if (error) throw error;
      setAllCrunchy(data);
    } catch (error) {
      console.error("خطأ أثناء جلب البيتزات:", error.message);
      setAllCrunchy([]);
    }
  };

  // ✅ جلب بيانات الفروع من JSON Server
  const getAllBranches = async () => {
    try {
      const { data, error } = await supabase.from("branches").select("*");
      if (error) throw error;
      setBranches(data);
    } catch (error) {
      console.error("خطأ أثناء جلب البيتزات:", error.message);
      setBranches([]);
    }
  };

  // ✅ تحميل البيانات عند تحميل المكون
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
