import { useState, useEffect } from "react";

export const GetPokemon = (url) => {
  const [resultPokemon, setResultPokemon] = useState({
    loading: true,
    data: null,
  });
  useEffect(() => {
    getData(url);
  }, [url]);

  async function getData(url) {
    try {
      setResultPokemon({ loading: true, data: null });
      const resp = await fetch(url);
      const data = await resp.json();
      const results = data.results;
      setResultPokemon({ loading: false, results })

    } catch (err) {
      <>{console.log(err)}</>;
    }
  }
  return resultPokemon;
};

  
