import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";
import { Button } from "react-bootstrap";

export default function CharacterPage() {
  /// STATES
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  console.log("character page loaded");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${currentPage}`
        );
        setCharacters(response.data.results);
        setInfo(response.data.info);
        console.log("Characters state after set:", characters);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
        console.log(err);
      }
    }
    fetchData();
  }, [currentPage]);

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  // IF STILL LOADING THEN DISPLAY THIS
  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error loading characters</p>;
  return (
    <>
      <div className="flex items-center space-x-4 mt-0.5 mb-2">
        <Button
          variant="primary"
          className="flex-5/12"
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="flex-2/12 text-center">
          Page {currentPage} of {info.pages}
        </div>
        <Button
          variant="primary"
          className="flex-5/12"
          onClick={handleNextClick}
          disabled={!info.next} // or `currentPage === info.pages`
        >
          Next
        </Button>
      </div>

      <div>{characters.results}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border border-b-cyan-700">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <div className="flex items-center space-x-4 mt-2">
        <Button
          variant="primary"
          className="flex-5/12"
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="flex-2/12 text-center">
          Page {currentPage} of {info.pages}
        </div>
        <Button
          variant="primary"
          className="flex-5/12"
          onClick={handleNextClick}
          disabled={!info.next} // or `currentPage === info.pages`
        >
          Next
        </Button>
      </div>
    </>
  );
}
