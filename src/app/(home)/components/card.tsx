'use client'

import { HeroesContext } from '@/providers/heroes'
import { HeroType } from '@/types/hero'
import Image from 'next/image'
import { useContext } from 'react'

interface CardProps {
  hero: HeroType
}

export function Card({ hero }: CardProps) {
  const { selectedHero, calculateTotalPowerstats } = useContext(HeroesContext)

  const powerstats = calculateTotalPowerstats(hero)

  function handleSelectedHero(hero: HeroType) {
    selectedHero(hero)
  }

  return (
    <div
      className="flex flex-col items-center gap-2 p-2 bg-zinc-800 rounded-md text-center border-2 border-blue-500 shadow-lg	shadow-blue-500 max-w-[130px]"
      onClick={() => handleSelectedHero(hero)}
    >
      <Image
        src={hero.images.sm}
        alt={hero.name}
        width={120}
        height={150}
        loading="lazy"
        placeholder="blur"
        quality={100}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPUqwcAAOEArzGi5DEAAAAASUVORK5CYII="
        className="max-w-[100%] h-auto shadow-lg shadow-blue-500 rounded-md object-contain"
      />
      <h3 className="font-bold text-lg">{hero.name}</h3>
      <span className="font-semibold">{powerstats}</span>
    </div>
  )
}
