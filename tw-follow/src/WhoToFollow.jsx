import TwitterFollowCard from "./TwitterFollowCard"

export default function WhoToFollow ({ followCardList }) {
  
  if (!followCardList.length)
    return;

  const listFollowCard = followCardList.map(card =>
    <TwitterFollowCard 
      key={card.userName} 
      userName={card.userName} 
      name={card.name}
    />
  )

  return (
    <div className="tw-content">
      <h1 className="tw-content-title">A quién seguir</h1>
      <div className="tw-content-cards">{listFollowCard}</div>
      <span className="tw-content-showMore tw-content-hover">Mostrar más</span>
    </div>
  )
}