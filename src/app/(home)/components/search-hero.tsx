'use client'

import { HeroesContext } from '@/providers/heroes'
import { Search } from 'lucide-react'
import { useContext, ChangeEvent } from 'react'

export function SearchHero() {
  const { filter, setFilter, filterChange } = useContext(HeroesContext)

  function handleSearchHero(event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value)
    filterChange(event.target.value)
  }

  return (
    <div className="fixed right-4 top-10 flex max-w-[220px] items-center gap-2 rounded-xl border-2 border-blue-500 bg-zinc-900 p-2">
      <Search />
      <input
        type="text"
        value={filter}
        onChange={handleSearchHero}
        className="max-w-[50%] bg-zinc-900 outline-none"
      />
    </div>
  )
}
