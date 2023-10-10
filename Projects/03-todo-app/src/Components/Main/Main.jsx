export function Main({
  error,
  loading,
  getTasks,
  onError,
  onLoading,
  onEmpty,
  render
}) {
  return(
    <main className="
      w-full mt-5 
    ">
      { error ? onError : null }
      { loading ? onLoading : null}
      { !loading && getTasks.length === 0 ? onEmpty : null }
      
      <section>
        { render }
      </section>
    </main>
  )
}

