// Write your code here
const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {id, name, imageUrl, forksCount, starsCount, issuesCount} =
    repositoryDetails
  return (
    <li>
      <image className="repository-image" src={imageUrl} alt={name} />
      <h1 className="repository-name">{name}</h1>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p>{forksCount}forks</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p>{issuesCount}issuesCount</p>
      </div>
    </li>
  )
}
export default RepositoryItem
