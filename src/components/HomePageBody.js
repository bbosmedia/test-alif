import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import BlogBody from './BlogBody'

const HomePageBody = ({ posts }) => {
 const [currentItems, setCurrentItems] = useState([])
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0)

	const [itemsPerPage, setItemsPerPage] = useState(10)

	const handlePageClick = (page) => {
		setItemOffset(page.selected)
	}
	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		setCurrentItems(posts.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(posts.length / itemsPerPage))
	}, [itemOffset, itemsPerPage, posts])
	return (
		<Container className="mt-5">
			<div className='paginations'>
				<label >Choose page count in every page:</label>

				<select className='form-control' name="pagecount" id="pagecount" onChange={(e) => setItemsPerPage(parseInt(e.target.value))}>
					<option value="10">10</option>
					<option value="20">20</option>
					<option value="50">50</option>
				</select>
			</div>
			<BlogBody posts={currentItems} />
			<div className="my-5">
				<ReactPaginate
					containerClassName={'pagination justify-content-center'}
					pageClassName={'page-item'}
					pageLinkClassName={'page-link'}
					previousClassName={'page-item'}
					previousLinkClassName={'page-link'}
					nextClassName={'page-item'}
					nextLinkClassName={'page-link'}
					breakClassName={'page-item'}
					breakLinkClassName={'page-link'}
					activeClassName={'active'}
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					marginPagesDisplayed={2}
					pageRangeDisplayed={3}
					pageCount={pageCount}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
				/>
			</div>
		</Container>
	)
}

export default HomePageBody