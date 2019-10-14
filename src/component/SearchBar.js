import React from "react"

class SearchBar extends React.Component {

    handleOnChangeTxt = (e) => {
        console.log(e.target.value);
        this.props.onFilterTextChange(e.target.value);
    };

    handleOnChangeChkBox = (e) => {
        console.log(e);
        this.props.onStockChange(e.target.checked);
    };

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        return (
            <div className="searchBar">
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" placeholder="Search..." value={filterText} onChange={this.handleOnChangeTxt}/>
                    <br/>
                    <input type="checkbox" id="inStock" value={inStockOnly} onClick={this.handleOnChangeChkBox}/>
                    <label htmlFor="inStock">Only show products in stock</label>
                </form>
            </div>
        )
    }
}

export default SearchBar;