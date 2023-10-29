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
    <div className="border-blue-500 border-2 rounded-xl bg-zinc-900 p-2 flex items-center gap-2 fixed right-4 top-10 max-w-[220px]">
      <Search />
      <input
        type="text"
        value={filter}
        onChange={handleSearchHero}
        className="bg-zinc-900 outline-none max-w-[50%]"
      />
    </div>
  )
}
