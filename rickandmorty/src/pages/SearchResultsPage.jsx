import React from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchResultsPage() {
  const { searchParams, setSearchParams } = useSearchParams();

  console.log("<SearchResults/>");
  const q = searchParams.get("q");

  console.log(q);

  return <div>SearchResultsPage</div>;
}
