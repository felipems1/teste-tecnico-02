import { Avatar, AvatarImage } from '@/components/ui/avatar'

export function Sidebar() {
  return (
    <aside className="w-44 flex flex-col items-center gap-10 fixed bg-zinc-950 inset-0">
      <div className="flex flex-col justify-center items-center gap-2 mt-10">
        <Avatar>
          <AvatarImage src="https://github.com/felipems1.png" />
        </Avatar>
        <h2 className="text-base uppercase font-bold">Felipe</h2>
      </div>
      <nav>
        <button className="py-1 px-10 uppercase bg-blue-700 rounded-md font-bold">
          Cartas
        </button>
      </nav>
    </aside>
  )
}
