import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function CharacterCard({ character }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const isListPage = location.pathname.endsWith("/characters");

  const handleClick = (buttonType) => {
    if (isListPage && buttonType === "info") {
      // go to detail route
      navigate(`/characters/${character.id}`);
    } else if (buttonType === "info") {
      // fallback / external link
      window.open("https://en.wikipedia.org/wiki/Rick_and_Morty", "_blank");
    } else {
      navigate(-1);
    }
  };

  return (
    <Card
      bg="dark"
      text="white"
      className="
        p-4 rounded transition-shadow duration-200 ease-in-out
        hover:-translate-y-1 hover:shadow-x3 hover:scale-105"
    >
      <Card.Img
        variant="top"
        src={character.image}
        alt={character.name}
        className="object-contain h-48 w-full"
      />
      <Card.Body className="text-center">
        <Card.Title as="h5" className="mb-0">
          {character.name}
        </Card.Title>
        <Card.Text>Gender: {character.gender}</Card.Text>
        <Card.Text>
          {character.type ? "Type: " + character.type : null}
        </Card.Text>
        {!isListPage ? (
          <div>
            <div>
              <Card.Text>
                Status: {character.status}
                <br></br>
                Species: {character.species}
                <br></br>
                Origin: {character.origin.name}
              </Card.Text>
            </div>
            <div className="flex-wrap">
              <Button variant="primary" onClick={() => handleClick("back")}>
                Go Back
              </Button>
            </div>
          </div>
        ) : (
          <br></br>
        )}
        <div className="flex-wrap">
          <Button variant="primary" onClick={() => handleClick("info")}>
            More info
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
