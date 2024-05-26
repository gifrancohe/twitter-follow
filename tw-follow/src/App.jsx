import './App.css'
import WhoToFollow from './WhoToFollow'
import { people } from './assets/data'

export default function App () {
  return (
    <section className='App'>
      <WhoToFollow followCardList={people} />
    </section>
  )
}
