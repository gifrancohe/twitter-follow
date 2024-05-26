import { useState } from "react"

export default function TwitterFollowCard ({ userName, children }) {
  
  const [isFollowing, setIsFollowing] = useState(false)
  
  const text = isFollowing ? "Siguiendo" : "Seguir"
  const buttonClassName = isFollowing
  ? 'tw-followcard-button is-following'
  : 'tw-followcard-button'
  
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  
  return (
    <article className='tw-followcard'>
      <header className='tw-followcard-header'>
        <img 
          alt='Avatar' 
          src={`https://unavatar.io/github/${userName}`} 
          className='tw-followcard-avatar'/>
        <div className='tw-followcard-info'>
          <strong className='tw-followcard-name'>{children}</strong>
          <span className='tw-followcard-info-username'>{`@${userName}`}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}