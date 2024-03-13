import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/common.module.css"

const Page = async ({ params }) => {
  const id = params.id

  const url = "https://api.themoviedb.org/3//trending/all/week?api_key=3bdf2435e134b20677690f7f6935aeb3&language=en-US";

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const result = data.results.filter((data) => { return (data.id == id) })
  console.log(result);

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>   Netflix \ <span> {result[0].media_type} </span> </h2>
      <div className={styles.card_section}>
        <div>
          <Image unoptimized src={`https://image.tmdb.org/t/p/original${result[0].poster_path}`} alt={result[0].title!=null ? result[0].title : result[0].name} width={400} height={400} />
        </div>
        <div>
          <h1>{result[0].title!=null ? result[0].title : result[0].name}</h1>
          <p>{result[0].overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Page;