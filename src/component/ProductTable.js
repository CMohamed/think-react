import React from "react"
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
    render() {
        console.log(this.props);

        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const products = this.props.products;
        let lastCategory = null;
        let list = [];
        products.filter((x) => {
            return x.name.includes(filterText) && (!inStockOnly || x.stocked);
        }).forEach((x) => {
            if (x.category !== lastCategory) {
                lastCategory = x.category;
                list.push(<ProductCategoryRow category={x.category}/>);
            }
            list.push(<ProductRow product={x}/>);
        });



        return (
            <div className="productTable">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;