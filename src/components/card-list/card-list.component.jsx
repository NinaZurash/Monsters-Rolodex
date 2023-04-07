import './card-list.styles.css'
import Card from '../card-container/card-container.components'

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />
      })}
    </div>
  )
}

export default CardList
