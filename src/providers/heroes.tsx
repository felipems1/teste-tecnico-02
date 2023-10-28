'use client'

import { api } from '@/utils/api'
import { HeroType } from '@/types/hero'
import axios from 'axios'
import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from 'react'

interface IHeroesContext {
  heroes: HeroType[]
  responseHeroes: HeroType[]
  filter: string
  setFilter: (filter: string) => void
}

export const HeroesContext = createContext<IHeroesContext>({} as IHeroesContext)

export const HeroesProvider = ({ children }: { children: ReactNode }) => {
  const [responseHeroes, setResponseHeroes] = useState<HeroType[]>([])
  const [filter, setFilter] = useState('')

  const fetchHeroes = useCallback(async () => {
    try {
      const response = await axios.get(api)
      setResponseHeroes(response.data)
    } catch (error) {
      console.error('Ocorreu um erro na requisição:', error)
    }
  }, [])

  const heroes = responseHeroes.filter((hero) =>
    hero.name.toLowerCase().includes(filter.toLowerCase()),
  )

  useEffect(() => {
    fetchHeroes()
  }, [fetchHeroes])

  return (
    <HeroesContext.Provider
      value={{ heroes, filter, responseHeroes, setFilter }}
    >
      {children}
    </HeroesContext.Provider>
  )
}
