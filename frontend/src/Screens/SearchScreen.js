import { useParams } from "react-router-dom"
import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { ProductDetails } from "../Components/Products/ProductDetails";
import { LoadingBox } from "../Components/LoadingBox/LoadingBox";
import { Navbar } from "../Components/Navbar/Navbar";
import { ProductItem } from "../Components/Products/ProductItem";
import {baseUrl} from '../lib';




const reducer = (state, action) => {

    switch(action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading: true};
        
        case 'FETCH_SUCCESS':
            return {...state, products : action.payload, loading: false};

        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload};

        default:
            return state;
    }
};



export const SearchScreen = () => {

    const params = useParams();

    const {search} = params;



    const [{loading, products, error}, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        products: []
    });



    useEffect(() => {

        const fetchData = async () => {

            dispatch({type: 'FETCH_REQUEST'});

            try {

                const result = await axios.get(
                    `${baseUrl}/api/products`); 
                dispatch({type: 'FETCH_SUCCESS', payload: result.data});

            }

            catch (err) {

                dispatch({type: 'FETCH_FAIL', payload: err.message});

            }

        }


        fetchData();

    }, []);



    return (

        <div className="searchScreen">

            {

                loading? (
                    <LoadingBox/>
                ) : 

                error ? (
                    <div> {error} </div>
                ) :

                (
                    <div className="products__displayProducts">

                                    {
                                        products.filter((i) => 
                                        i.name.toLowerCase().includes(search.toLowerCase()) ||
                                        i.slug.toLowerCase().includes(search.toLowerCase())
                                        )
                                        .map((item) => {
                                            return(
                                            <ProductItem
                                            key = {item.slug}
                                            prop = {item}
                                            />
                        
                                            )
                                            
                                        })
                                    }
                        
                                {/* products.map((item) => {
                                    return(
                                    <ProductItem
                                    key = {item.slug}
                                    prop = {item}
                                    />
                                    )   
                                }) */}


                        
                        </div>

                )

            }


        </div>
    )
}