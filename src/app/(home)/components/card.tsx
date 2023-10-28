import { HeroType } from '@/types/hero'
import Image from 'next/image'

interface CardProps {
  hero: HeroType
}

export function Card({ hero }: CardProps) {
  const powerstats = Object.values(hero.powerstats).reduce(
    (total, value) => total + value,
    0,
  )

  return (
    <div className="flex flex-col items-center gap-2 p-2 bg-zinc-800 rounded-md text-center border-2 border-blue-500 shadow-lg	shadow-blue-500">
      <Image
        src={hero.images.sm}
        alt={hero.name}
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto max-h-[70%] w-auto max-w-[80%] shadow-lg shadow-blue-500 rounded-md"
      />
      <h3 className="font-bold text-lg">{hero.name}</h3>
      <span className="font-semibold">{powerstats}</span>
    </div>
  )
}
