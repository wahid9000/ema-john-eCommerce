import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const { totalProducts } = useLoaderData();
    console.log(totalProducts);
    const productsPerPage = 10; //TODO, make it dynamic then
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // const pageNumbers = [];
    // for(let i = 1; i <= totalPages; i++){
    //     pageNumbers.push(i);
    // }

    const pageNumbers = [...Array(totalPages).keys()]


    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step-1: get id of the added product

        for (const id in storedCart) {
            //step-2: get product from products state by using id
            const addedProduct = products.find(product => product._id === id)
            if (addedProduct) {
                //step-3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step-4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
        }
        //step-5: set the cart
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        // const newCart = [...cart, product];
        let newCart = [];

        //if product doesnt exist in the cart, set quantity = 1
        //if exists update quantity by 1

        const exists = cart.find(pd => pd._id === product._id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd._id !== product._id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product._id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <>
            <div className='shop-container'>

                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>

                <div className="cart-container">
                    <Cart
                        cart={cart}
                        handleClearCart={handleClearCart}
                    >
                        <Link className='proceed-link' to="/order">
                            <button className='proceed-btn'>Review Order</button>
                        </Link>
                    </Cart>
                </div>

            </div>

            {/* Pagination */}

            <div className="pagination">
                {
                    pageNumbers.map(pageNumber => <button

                        key={pageNumber}>

                        {pageNumber}

                    </button>)
                }
            </div>

        </>
    );
};

export default Shop;

