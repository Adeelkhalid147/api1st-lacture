import React from "react";

type Book = {
    id:number;
    name: string;
    type: string;
    available: boolean;
}

async function getFiction() {
  const response = await fetch(
    "http://simple-books-api.glitch.me/books/?type=fiction",
    {
      cache: "no-store",
    }
  );
  const data = response.json();
  return data;
}

async function getNonFiction() {
  const response = await fetch(
    "http://simple-books-api.glitch.me/books/?type=non-fiction",
    {
      cache: "no-store",
    }
  );
  const data = response.json();
  return data;
}

export default async function Parallel() {
  const fictionBooks = getFiction();
  const nonfictionBooks = getNonFiction();

  const [fiction, nonfiction] = await Promise.all([
    fictionBooks,
    nonfictionBooks,
  ]);
  return <div>
    <h1 className="font-bold text-lg text-orange-200">Fiction Books</h1>
    <ul>
    {fiction.map((book:Book)=>(
<li key={book.id}>{book.name}</li>
    ))}
    </ul>

    <h1 className="font-bold text-lg text-orange-200">Non-Fiction Books</h1>
    <ul>
        {nonfiction.map((book:Book)=>(
            <li key={book.id}>{book.name}</li>
            ))}
    </ul>
  </div>;
}
