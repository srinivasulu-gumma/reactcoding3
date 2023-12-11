// Write your code here.
import './index.css'

const TechnologyPage = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-container`}>
      <h1 className="heading"> {title} </h1>
      <p className="paragraph"> {description} </p>
      <img src={imgUrl} className="image" alt="Loading..." />
    </li>
  )
}

export default TechnologyPage
