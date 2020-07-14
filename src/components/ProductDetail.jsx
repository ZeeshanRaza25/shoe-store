import React from 'react'
import { useParams } from 'react-router'

export default function ProductDetail() {
    const { productId } = useParams();

    return (
        <div>
            Product Detail of {productId}
        </div>
    )
}
