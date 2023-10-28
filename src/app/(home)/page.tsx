import { WinningHeroModal } from '@/components/ui/winning-hero-modal'
import { ListCard } from './components/list-card'

export default async function Home() {
  return (
    <div className="w-full flex overflow-hidden py-10 px-3 gap-2">
      <WinningHeroModal />
      <ListCard />
    </div>
  )
}
