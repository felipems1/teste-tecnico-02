'use client'

import { HeroesContext } from '@/providers/heroes'
import { useContext } from 'react'
import { Card } from './card'

export function ListCard() {
  const { heroes } = useContext(HeroesContext)

  return (
    <div className="flex flex-wrap gap-10 mt-16 px-5 lg:mt-0">
      {heroes?.map((hero) => <Card key={hero.id} hero={hero} />)}
    </div>
  )
}
