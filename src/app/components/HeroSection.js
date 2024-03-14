import React from "react";
import herostyle from "../styles/herosection.module.css"
import style from "../styles/common.module.css"
import { Mulish } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})

const HeroSection = ({title,imageUrl}) => {
    return (
        <main className={herostyle.main_section}>
            <div className={style.container}>
                <div className={style.grid_two_section}>
                    <div className={herostyle.hero_content}>
                        <h1>{title}</h1>
                        <p>From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our
                            selection of the latest and greatest movies, and find your new favorite today.
                        </p>
                        <Link href="/movie">
                            <button className={mulish.className}>
                                Explore Movies
                            </button>
                        </Link>
                    </div>
                    <div className={herostyle.hero_image}>
                        <Image src={imageUrl} width={500} height={500} alt="Section Image"/>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default HeroSection;