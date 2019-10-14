import React from "react"

class SearchBar extends React.Component {
    handleOnSubmit() {
        console.log(this.props);
    }
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        return (
            <div className="searchBar">
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" placeholder="Search..." value={filterText} onSubmit={this.handleOnSubmit}/>
                    <br/>
                    <input type="checkbox" id="inStock" value={inStockOnly} onSubmit={this.handleOnSubmit}/>
                    <label htmlFor="inStock">Only show products in stock</label>
                </form>
            </div>
        )
    }
}

export default SearchBar;