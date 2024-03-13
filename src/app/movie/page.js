import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from "../../app/styles/common.module.css"

const Movie = async () => {

    // await new Promise(resolve => setTimeout(resolve, 2000));


    const url = "https://api.themoviedb.org/3//trending/all/week?api_key=3bdf2435e134b20677690f7f6935aeb3&language=en-US";

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const result = data.results

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            result.map((curElem) => {
                                return (
                                    <MovieCard key={curElem.id} {...curElem}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;