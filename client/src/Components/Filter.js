import React from 'react'
import ProductCard from './ProductCard'

class Filter extends React.Component {

    render() {

        const {viewEverything, telescopes, sextants, belowThousand} = this.props

        return (
            <main className="product-main">
            <div className="container product-content">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="product-showcase">Products</h2>
                    </div>

                    <input type="radio" id="telescopes" name="color" onClick={telescopes}/>
                    <label className="filter-label" htmlFor="telescopes">Telescopes</label>
                    <input type="radio" id="sextants" name="color" onClick={sextants}/>
                    <label className="filter-label" htmlFor="sextants">Sextants</label>
                    <input type="radio" id="belowThousand" name="color" onClick={belowThousand}/>
                    <label className="filter-label" htmlFor="belowThousand">Below $1000</label>
                    <input type="radio" id="reset" name="color" onClick={viewEverything}/>
                    <label className="filter-label" htmlFor="reset">All</label>
                    
                    <ProductCard allProducts={this.props.allProducts}/>
                    

                </div>
            </div>
        </main>
        )
    }
}

export default Filter