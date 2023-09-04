
import { useContext } from 'react'
import { TaskContext } from '../../Hooks/useContext'
import { MainLoader } from './MainLoader'
import { EmptyBox } from './EmptyBox'
import { Error } from './Error'
import { Tasks } from './Tasks'

export function Main() {
  const {
    loading,
    error,
    getTasks,
  } = useContext(TaskContext)

  return(
    <main className="
      w-full mt-5 
    ">
      <section>
        {loading && <MainLoader />}
        {error && <Error />}
        {
          (!loading && getTasks.length === 0)
            && <EmptyBox />
        }

        <Tasks />
      </section>
    </main>
  )
}

