import './index.css'

const TabItem = props => {
  const {tabDetails, onSetActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  const onClickTab = () => {
    onSetActiveTab(tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTab}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
