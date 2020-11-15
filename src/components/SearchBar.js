import React from 'react'


class SearchBar extends React.Component {

    state = { term: '' }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {

        return (
            <div className="ui segment" style={{ textAlign: 'center' }}>
                <form onSubmit={ this.onFormSubmit }>
                    <div className="ui icon input">
                        <input 
                            type="text" 
                            placeholder="Search Images..." 
                            value={this.state.term}
                            id="text"
                            onChange={ (e)=> this.setState({ term: e.target.value }) }  
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        )   
    }
}

export default SearchBar;