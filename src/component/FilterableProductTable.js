import React from "react"
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filterText: '', inStockOnly: false};
    }

    handleFilterTextChange = (filter) => {
        this.setState({
            filterText: filter
        })
    };

    handleOnStockChange = (stocked) => {
        console.log(stocked)
      this.setState({
          inStockOnly: stocked
      })
    };

    render() {
        console.log(this.state);
        const products = this.props.products;
        return (
            <div className="container filterableProductTbale">
                <SearchBar
                    filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onStockChange={this.handleOnStockChange}
                />
                <ProductTable filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} products={products}/>
            </div>
        )
    }
}


export default FilterableProductTable;