import React from 'react'
import SearchBar from './SearchBar'
import Unsplash from '../API/Unsplash'
import ImageList from './ImageList'


class App extends React.Component {

    state = { images: [] }

    onSearchSubmit = async term => {
        const response = await Unsplash.get('/search/photos', { params: { query: term } })
        this.setState( { images: response.data.results } )
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={ this.onSearchSubmit } />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;