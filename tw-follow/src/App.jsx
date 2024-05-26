import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

export default function App () {
  return (
    <section className='App'>
      <TwitterFollowCard userName="gifrancohe">
        Giovanny Franco Herrera
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>
    </section>
  )
}
