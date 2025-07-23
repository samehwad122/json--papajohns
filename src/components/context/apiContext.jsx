import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const apiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const url = 'https://json-papajohns-production.up.railway.app/';

  const [allpostars, setAllPostars] = useState([]);
  const [allPizzas, setAllPizzas] = useState([]);
  const [appetizers, setAllAppetizers] = useState([]);
  const [desserts, setAllDesserts] = useState([]);
  const [crunchy, setAllCrunchy] = useState([]);
  const [branches, setBranches] = useState([]);

  async function getAllPostars() {
    try {
      const { data } = await axios.get(`${url}/postars`);
      setAllPostars(data);
    } catch (error) {
      setAllPostars([]);
    }
  }

  async function getAllPizzas() {
    try {
      const { data } = await axios.get(`${url}/pizzas`);
      setAllPizzas(data);
    } catch (error) {
      setAllPizzas([]);
    }
  }

  async function getAllAppetizers() {
    try {
      const { data } = await axios.get(`${url}/appetizers`);
      setAllAppetizers(data);
    } catch (error) {
      setAllAppetizers([]);
    }
  }

  async function getAllDesserts() {
    try {
      const { data } = await axios.get(`${url}/desserts`);
      setAllDesserts(data);
    } catch (error) {
      setAllDesserts([]);
    }
  }

  async function getAllCrunchy() {
    try {
      const { data } = await axios.get(`${url}/crunchy`);
      setAllCrunchy(data);
    } catch (error) {
      setAllCrunchy([]);
    }
  }

  async function getAllBranches() {
    try {
      const { data } = await axios.get(`${url}/branches`);
      setBranches(data);
    console.log(data);
    
    } catch (error) {
      setBranches([]);
    }
  }

  useEffect(() => {
    getAllPostars();
    getAllPizzas();
    getAllAppetizers();
    getAllDesserts();
    getAllCrunchy();
    getAllBranches();
  }, []);

  return (
    <apiContext.Provider value={{
      allpostars, allPizzas, appetizers, desserts, crunchy, branches
    }}>
      {children}
    </apiContext.Provider>
  );
};
