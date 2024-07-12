// Write your code here
const LanguageFilterItem = props => {
  const {isAcitve, languageFilterDetails, setActiveLanguageFilterId} = props
  const {id, language} = languageFilterDetails
  const buttonClassName = isAcitve ? 'active-btn' : 'inactive'
  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }
  return (
    <li>
      <button
        type="button"
        onClick={onClickLanguageFilter}
        className={buttonClassName}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
