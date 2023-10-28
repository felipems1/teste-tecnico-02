'use client'

import { HeroesContext } from '@/providers/heroes'
import { useContext } from 'react'
import { Card } from './card'

export function ListCard() {
  const { heroes } = useContext(HeroesContext)

  return (
    <div className="grid grid-cols-4 gap-12 px-6">
      {heroes?.map((hero) => <Card key={hero.id} hero={hero} />)}
    </div>
  )
}
