import Link from "next/link";
import React from "react";
import styles from "../../app/styles/common.module.css"
import Image from "next/image";

const MovieCard = (curElem) => {
    const { id, title, poster_path, name, overview } = curElem
    const url = `https://image.tmdb.org/t/p/original${poster_path}`

    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                <Image unoptimized src={url} alt={name!=null ? name: title} width={300} height={300}/>
            </div>
            <div className={styles.card_data}>
                <h2>{name!=null ? name: title}</h2>
                <p>{overview.substring(0,90)}</p>
                <Link href={`/movie/${id}`}>
                    <button>Read More</button>
                </Link>
            </div>
        </div>
    )   
}

export default MovieCard;