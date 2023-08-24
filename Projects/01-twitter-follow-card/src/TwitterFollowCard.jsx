export function TwitterFollowCard({
  userName,
  name,
  isFollowing
}) {
  return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
      <img 
        className='tw-followCard-avatar'
        src={`https://unavatar.io/twitter/${userName}`}
        alt="Avatar picture" />
      <div className='tw-followCard-info'>
        <strong>{name}</strong>
        <span className='tw-followCard-infoUserName'>@{userName}</span>
      </div>

      <aside>
        <button className='tw-followCard-button'>Follow</button>
      </aside>
    </header>
  </article>
  )
}