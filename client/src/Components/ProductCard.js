import React from 'react'
import '../lib/css/styles.css'


function ProductCard(props) {
    
    const {allProducts} = props

    function displayProducts() {

        const mappedProducts = allProducts.map((product, index) => {
            return (
                <div key={index}>
                    <div className="product-display">
                        <h2 className="card product-name">{product.product_name}</h2>
                        <img className="card product-img" src={product.img_url} alt={product.product_description}/>
                        <div className="card product-description">
                            <p>{product.product_description}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    </div>
                </div>        
            );
        });
            return mappedProducts;
        };

    return (
        displayProducts()
    );
};

export default ProductCard;

// if (everything) {



//     const mappedProducts = allProducts.map(product => {

//         return (
//             <div>
//                 <div className="product-display">
//                     <h2 className="card product-name">{product.name}</h2>
//                     <img className="card product-img" src={product.image} alt={product.alt}/>
//                     <div className="card product-description">
//                         <p>{product.description}</p>
//                         <p>Price: ${product.price}</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     })

//     return mappedProducts;
// }
// } else if (telescopes) {
//     const mappedProducts = props.productsArray.filter(product=>product.telescope).map(product => {

//     return (
//         <div>
//             <div className="product-display">
//                 <h2 className="card product-name">{product.name}</h2>
//                 <img className="card product-img" src={product.image} alt={product.alt}/>
//                 <div className="card product-description">
//                     <p>{product.description}</p>
//                     <p>Price: ${product.price}</p>
//                 </div>
//             </div>
//         </div>
//     )
// })

// return mappedProducts;

// } else if (sextants) {
//     const mappedProducts = props.productsArray.filter(product=>product.sextant).map(product => {

//     return (
//         <div>
//             <div className="product-display">
//                 <h2 className="card product-name">{product.name}</h2>
//                 <img className="card product-img" src={product.image} alt={product.alt}/>
//                 <div className="card product-description">
//                     <p>{product.description}</p>
//                     <p>Price: ${product.price}</p>
//                 </div>
//             </div>
//         </div>
//     )
// })

// return mappedProducts;

// } else if (belowThousand) {
//     const mappedProducts = props.productsArray.filter(product=>product.belowThousand).map(product => {

//     return (
//         <div>
//             <div className="product-display">
//                 <h2 className="card product-name">{product.name}</h2>
//                 <img className="card product-img" src={product.image} alt={product.alt}/>
//                 <div className="card product-description">
//                     <p>{product.description}</p>
//                     <p>Price: ${product.price}</p>
//                 </div>
//             </div>
//         </div>
//     )
// })

// return mappedProducts;

// }