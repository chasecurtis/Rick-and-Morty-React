import React, { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CharacterDetailPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
        console.log(err);
      }
    }
    fetchData();
  }, []);

  // IF STILL LOADING THEN DISPLAY THIS
  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error loading characters</p>;

  return <CharacterCard key={character.id} character={character} />;
}
