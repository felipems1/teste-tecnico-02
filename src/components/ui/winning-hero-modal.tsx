'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { HeroesContext } from '@/providers/heroes'
import Image from 'next/image'
import { useContext, useState, useEffect, useMemo } from 'react'

export function WinningHeroModal() {
  const [heroWinner, setHeroWinner] = useState('')

  const {
    setShowModal,
    resultWinner,
    showModal,
    heroOneSelected,
    heroTwoSelected,
    setHeroOneSelected,
    setHeroTwoSelected,
  } = useContext(HeroesContext)

  useMemo(() => {
    if (heroOneSelected !== null && heroTwoSelected !== null) {
      const winner = resultWinner(heroOneSelected, heroTwoSelected)
      setHeroWinner(winner)
    }
  }, [heroOneSelected, heroTwoSelected, resultWinner])

  useEffect(() => {
    if (!showModal) {
      setHeroOneSelected(null)
      setHeroTwoSelected(null)
    }
  }, [showModal, setHeroOneSelected, setHeroTwoSelected])

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <span className="text-xl text-green-500">Winner</span> {heroWinner}
          </DialogTitle>
          <DialogClose asChild={showModal} />
        </DialogHeader>
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col items-center justify-center gap-5">
            <Image
              src={heroOneSelected?.images.lg || ''}
              alt={heroOneSelected?.name || ''}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[50%] w-auto max-w-[50%] rounded-md object-contain shadow-lg shadow-blue-500"
            />
            <h2 className="text-center text-sm font-bold uppercase md:text-2xl">
              {heroOneSelected?.name}
            </h2>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              {heroOneSelected?.powerstats &&
                Object.values(heroOneSelected?.powerstats).map((power) => (
                  <span key={power}>{power}</span>
                ))}
            </div>
            <div className="flex flex-col gap-2">
              {heroOneSelected?.powerstats &&
                Object.keys(heroOneSelected?.powerstats).map((power) => (
                  <span key={power}>{power}</span>
                ))}
            </div>
            <div className="flex flex-col gap-2">
              {heroTwoSelected?.powerstats &&
                Object.values(heroTwoSelected?.powerstats).map((power) => (
                  <span key={power}>{power}</span>
                ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-5">
            <Image
              src={heroTwoSelected?.images.lg || ''}
              alt={heroTwoSelected?.name || ''}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[50%] w-auto max-w-[50%] rounded-md object-contain shadow-lg shadow-blue-500"
            />
            <h2 className="text-center text-sm font-bold uppercase md:text-2xl">
              {heroTwoSelected?.name}
            </h2>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
