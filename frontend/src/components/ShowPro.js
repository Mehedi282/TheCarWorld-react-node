import React, { useEffect, useState } from 'react'
import "./style/showpro.css"
import "./style/card.css"
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions'
import MessageBox from './MessageBox'
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";



export default function ShowPro() {
  const [currentPage, setCurrentPage] = useState(1)
  // const [keyword, setKeyword] =useState("")
  // const keyword = match.params.keyword

  const { products, productsCount, resPerPage } = useSelector((state) => state.productList);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProducts(currentPage));
  }, [dispatch, currentPage])

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber)
  }
  return (
    <div className='text-light'>

      {products && products.length === 0 && <MessageBox>No Product Found</MessageBox>}
      <div className='row showroom-products'>

        {
          products && products.map(product => (

            <div key={product._id} className="col-md-4 onecard" style={{ width: "30rem" }}>
              <div className="card" >
                <Link to={`/product/${product._id}`}>
                  <img src={product.image} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                  <Link to={`/product/${product._id}`}>
                    <h5 className="card-title c-title">{product.name}</h5>
                  </Link>
                  <h6 className=" mb-2 price-c ">{product.price}</h6>
                  <p className="card-text c-des">{product.description}</p>
                  <div className='last'>
                    <span className=" text-light mr-2"><i className="fas fa-link"></i>{product.condition}  </span>
                    <span className="text-muted "><i className="fab fa-github"></i>{product.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      {resPerPage <= productsCount && (
        <div className='d-flex justify-content-center m-5 '>
          <Pagination
          className="pagination"
            activePage={currentPage}
            itemsCountPerPage={resPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={'First'}
            lastPageText={'Last'}
            itemClass='page-item'
            linkClass='page-link'
            />
        </div>
      )}

    </div>
  )
}
