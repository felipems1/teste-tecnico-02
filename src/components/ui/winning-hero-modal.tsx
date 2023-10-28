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
import { useContext, useState, useEffect } from 'react'

export function WinningHeroModal() {
  const [heroWinner, setHeroWinner] = useState('')

  const {
    showModal,
    setShowModal,
    heroOneSelected,
    heroTwoSelected,
    resultWinner,
  } = useContext(HeroesContext)

  useEffect(() => {
    if (heroOneSelected !== null && heroTwoSelected !== null) {
      setHeroWinner(resultWinner(heroOneSelected, heroTwoSelected))
    }
  }, [heroOneSelected, heroTwoSelected, resultWinner])

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <span className="text-xl text-green-500">Winner</span> {heroWinner}
          </DialogTitle>
          <DialogClose asChild={showModal} />
        </DialogHeader>
        <div className="flex justify-between items-center gap-5">
          <div className="flex flex-col gap-5 justify-center items-center">
            <Image
              src={heroOneSelected?.images.lg || ''}
              alt={heroOneSelected?.name || ''}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[50%] w-auto max-w-[50%] shadow-lg shadow-blue-500 rounded-md object-contain"
            />
            <h2 className="text-2xl uppercase font-bold">
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

          <div className="flex flex-col gap-5 justify-center items-center">
            <Image
              src={heroTwoSelected?.images.lg || ''}
              alt={heroTwoSelected?.name || ''}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[50%] w-auto max-w-[50%] shadow-lg shadow-blue-500 rounded-md object-contain"
            />
            <h2 className="text-2xl uppercase font-bold">
              {heroTwoSelected?.name}
            </h2>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
