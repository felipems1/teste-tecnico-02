'use client'

import { HeroesContext } from '@/providers/heroes'
import { Search } from 'lucide-react'
import { useContext, ChangeEvent } from 'react'

export function SearchHero() {
  const { filter, setFilter } = useContext(HeroesContext)

  function handleSearchHero(event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value)
  }

  return (
    <div className="fixed right-0 bottom-0 top-0 flex-1 py-10 px-3">
      <div className="border-blue-500 border-2 rounded-xl bg-zinc-900 p-2 flex gap-2 w-full">
        <Search />
        <input
          type="text"
          value={filter}
          onChange={handleSearchHero}
          className="bg-zinc-900 outline-none max-w-[80%]"
        />
      </div>
    </div>
  )
}
