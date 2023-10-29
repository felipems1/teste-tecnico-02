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
      className="flex max-w-[130px] flex-col items-center gap-2 rounded-md border-2 border-blue-500 bg-zinc-800 p-2 text-center	shadow-lg shadow-blue-500"
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
        className="h-auto max-w-[100%] rounded-md object-contain shadow-lg shadow-blue-500"
      />
      <h3 className="text-lg font-bold">{hero.name}</h3>
      <span className="font-semibold">{powerstats}</span>
    </div>
  )
}
