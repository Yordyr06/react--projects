
import { Children } from 'react'

export function Main({ Children }) {
  return(
    <main className="
      w-full mt-5 
    ">
      <section>
        { Children }
      </section>
    </main>
  )
}

