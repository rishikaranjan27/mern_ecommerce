import { useParams } from "react-router-dom"
import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

import { ProductDetails } from "../Components/Products/ProductDetails";
import { LoadingBox } from "../Components/LoadingBox/LoadingBox";
import { Navbar } from "../Components/Navbar/Navbar";
import {baseUrl} from '../lib';



const reducer = (state, action) => {

    switch(action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading: true};
        
        case 'FETCH_SUCCESS':
            return {...state, product : action.payload, loading: false};

        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload};

        default:
            return state;
    }
};



export const ProductScreen = () => {


    const params = useParams();
    const {slug} = params;


    const [{loading, product, error}, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        product: []
    });



    useEffect(() => {

        const fetchData = async () => {

            dispatch({type: 'FETCH_REQUEST'});

            try {

                const result = await axios.get(
                    `${baseUrl}/api/products/slug/${slug}`); 
                dispatch({type: 'FETCH_SUCCESS', payload: result.data});

            }

            catch (err) {

                dispatch({type: 'FETCH_FAIL', payload: err.message});

            }

        }


        fetchData();

    }, [slug]);

    


    return (
        <div className="productScreen"> 


            {

                loading? (
                    <LoadingBox/>
                ) : 

                error ? (
                    <div> {error} </div>
                ) :

                (
                    <ProductDetails
                    prop = {product}
                    />
                
                )

            }

            
           
        </div>
    )
}

