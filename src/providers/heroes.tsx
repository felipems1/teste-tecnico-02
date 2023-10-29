'use client'

import { api } from '@/utils/api'
import { HeroType } from '@/types/hero'
import axios from 'axios'
import { createContext, ReactNode, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { debounce } from 'debounce'

interface IHeroesContext {
  heroes: HeroType[] | undefined
  filter: string
  isLoading: boolean
  error: Error | null
  showModal: boolean
  heroOneSelected: HeroType | null
  heroTwoSelected: HeroType | null
  filterChange: (value: string) => void
  setFilter: (filter: string) => void
  setShowModal: (showModal: boolean) => void
  selectedHero: (hero: HeroType) => void
  calculateTotalPowerstats: (hero: HeroType | null) => number
  resultWinner: (heroOne: HeroType, heroTwo: HeroType) => string
  setHeroOneSelected: (newValue: null) => void
  setHeroTwoSelected: (newValue: null) => void
}

export const HeroesContext = createContext<IHeroesContext>({} as IHeroesContext)

export const HeroesProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState('')
  const [heroes, setHeroes] = useState<HeroType[]>([])

  const [showModal, setShowModal] = useState(false)

  const [heroOneSelected, setHeroOneSelected] = useState<HeroType | null>(null)
  const [heroTwoSelected, setHeroTwoSelected] = useState<HeroType | null>(null)

  function calculateTotalPowerstats(hero: HeroType | null): number {
    if (hero === null) {
      return 0
    }

    const total = Object.values(hero.powerstats).reduce(
      (total, value) => total + value,
      0,
    )

    return total
  }

  function resultWinner(heroOne: HeroType, heroTwo: HeroType) {
    const totalPowerHero1 = calculateTotalPowerstats(heroOne)
    const totalPowerHero2 = calculateTotalPowerstats(heroTwo)

    if (totalPowerHero1 > totalPowerHero2) {
      return heroOne.name
    } else if (totalPowerHero2 > totalPowerHero1) {
      return heroTwo.name
    } else {
      return 'Empate'
    }
  }

  function selectedHero(hero: HeroType) {
    if (!heroOneSelected) {
      setHeroOneSelected(hero)
    } else if (!heroTwoSelected) {
      setHeroTwoSelected(hero)
      setShowModal(true)
    }
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['heroes'],
    queryFn: async (): Promise<HeroType[]> => {
      const response = await axios.get(api)
      setHeroes(response.data)
      return response.data
    },
  })

  const filterChange = debounce((value: string) => {
    const filtered =
      data?.filter((hero) =>
        hero.name.toLowerCase().includes(value.toLowerCase()),
      ) || []
    setHeroes(filtered)
  }, 1000) // 1s de atraso

  return (
    <HeroesContext.Provider
      value={{
        heroes,
        isLoading,
        error,
        filter,
        showModal,
        heroOneSelected,
        heroTwoSelected,
        filterChange,
        setHeroOneSelected,
        setHeroTwoSelected,
        calculateTotalPowerstats,
        resultWinner,
        setShowModal,
        setFilter,
        selectedHero,
      }}
    >
      {children}
    </HeroesContext.Provider>
  )
}
