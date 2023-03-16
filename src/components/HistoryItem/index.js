import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-container">
      <div className="list-items">
        <div className="list-items-2">
          <p className="time-accessed">{timeAccessed}</p>
          <div className="items-and-delete-button">
            <div className="logo-and-domain-name">
              <img src={logoUrl} alt="domain logo" />
              <div className="title-and-domain-name">
                <p className="title">{title}</p>
                <p className="domain-url">{domainUrl}</p>
              </div>
            </div>
          </div>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
          onClick={onDelete}
        />
      </div>
    </li>
  )
}

export default HistoryItem
