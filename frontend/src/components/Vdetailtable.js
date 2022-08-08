import React from 'react'

import "./style/product-s.css"
export default function Vdetailtable({products}) {
    return (
        <div className='my-4'>
            <h1 className='text-light t-head'>Vehicle Details</h1>
        <table className=" table text-secondary  bg-light w-75 table-bordered table-bold-col vehicle-details vehicle-view__section">
            <tbody>
            <tr className="vehicle-details__row ">
            <td className="vehicle-details__label ">Mileage</td>
            <td className="vehicle-details__value">{products.mileage}</td>
            <td className="vehicle-details__label">Transmission</td>
            <td className="vehicle-details__value">{products.transmission}</td>
            </tr>
            <tr className="vehicle-details__row">
            <td className="vehicle-details__label">Year</td>
            <td className="vehicle-details__value">{products.year}</td>
            <td className="vehicle-details__label">Fuel Type</td>
            <td className="vehicle-details__value">{products.fuel}</td>
            </tr>
            <tr className="vehicle-details__row">
            <td className="vehicle-details__label">Condition</td>
            <td className="vehicle-details__value">{products.condition}</td>
            <td className="vehicle-details__label">Area</td>
            <td className="vehicle-details__value">{products.area}</td>
            </tr>
            <tr className="vehicle-details__row">
            <td className="vehicle-details__label">Colour</td>
            <td className="vehicle-details__value">{products.iColor}a</td>
            <td className="vehicle-details__label">Reference</td>
            <td className="vehicle-details__value">{products.reference}</td>
            </tr>
            <tr className="vehicle-details__row">
            <td className="vehicle-details__label">Options</td>
            <td id="vehicle-options" className="vehicle-details__value" colSpan="3">{products.description}</td>
            </tr>
            </tbody>
        </table>
        <h1 className='text-light t-head'>Vehicle Description</h1>
        <div className='vehicle-d w-75'>
        <p>{products.description}</p>
        </div>
        </div>
    )
}
