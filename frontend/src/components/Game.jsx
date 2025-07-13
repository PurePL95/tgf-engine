import PlayerProfile from './PlayerProfile'
import Navbar from './Navbar'

export default function Game({ token }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="rpg-panel w-full text-center">Game board</div>
        </div>
        <div className="hidden lg:block w-80 p-4">
          <PlayerProfile token={token} />
        </div>
      </div>
    </div>
  )
}
