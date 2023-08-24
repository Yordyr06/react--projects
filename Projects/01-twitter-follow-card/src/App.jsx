import { TwitterFollowCard } from './TwitterFollowCard'
import "./App.css"

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard 
        userName={'yordyr06'}
        name={'Yordy Almonte'}
      />

      <TwitterFollowCard 
        userName={'midudev'}
        name={'Miguel Angel Duran'}
      />

      <TwitterFollowCard 
        userName={'reactjs'}
        name={'React'}
      />
    </section>
  )
}