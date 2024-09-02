import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);

  // Para hacer el dispatch de mis acciones respectivas
  const dispatch = useDispatch();

  //Recordatorio: si quiero hacer algo cuando el componente es creado la primera vez y ¡Solo una vez! Usamos useEffect con dependencias vacías
  useEffect(() => {
    console.log("Se ha creado el componente");
    dispatch(getPokemons());
    // como está memorizado no hace falta poner el dispatch como dependencia
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <span>Loading: {isLoading ? "True" : "False"}</span>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
