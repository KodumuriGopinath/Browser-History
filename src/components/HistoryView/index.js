import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class HistoryView extends Component {
  state = {
    searchInput: '',
    historyList: [],
  }

  onInputSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    const {initialHistoryList} = this.props
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state

    const searchResults = initialHistoryList.filter(eachList =>
      eachList.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

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
      </div>
    )
  }
}

export default HistoryView
