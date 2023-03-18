import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class HistoryView extends Component {
  state = {
    searchInput: '',
    initialHistoryList: this.props,
  }

  onInputSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    const {initialHistoryList} = this.state
    const filteredListDate = initialHistoryList.filter(every => every.id !== id)

    this.setState({initialHistoryList: filteredListDate})
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state

    const searchResults = initialHistoryList.filter(eachList =>
      eachList.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let EmptyList
    if (searchResults.length < 1) {
      EmptyList = <p className="empty-list">There is no history to show</p>
    }

    return (
      <div>
        <div className="blue-background">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
            className="app-logo"
          />
          <div className="search-all-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search history"
                onChange={this.onInputSearch}
              />
            </div>
          </div>
        </div>
        <div className="list-card-container">
          <ul className="list-items-container">
            {searchResults.map(eachItem => (
              <HistoryItem
                historyDetails={eachItem}
                deleteItem={this.deleteItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
        <div className="empty-container">{EmptyList}</div>
      </div>
    )
  }
}

export default HistoryView
