'use client'

import { WinningHeroModal } from '@/components/ui/winning-hero-modal'
import { ListCard } from './components/list-card'
import { SearchHero } from '@/app/(home)/components/search-hero'
import { useContext } from 'react'
import { HeroesContext } from '@/providers/heroes'

export default function Home() {
  const { isLoading, error } = useContext(HeroesContext)

  if (isLoading) {
    return (
      <div className="fixed left-[50%] top-[50%] text-2xl">Carregando...</div>
    )
  }

  if (error) {
    return (
      <div className="fixed left-[50%] top-[50%] text-2xl">
        Algo deu errado !
      </div>
    )
  }

  return (
    <div className="w-full overflow-hidden py-10 px-3 gap-2">
      <WinningHeroModal />
      <SearchHero />
      <ListCard />
    </div>
  )
}
