import React, { useEffect, useState } from 'react'
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import HomePageBody from '../components/HomePageBody'

import {listposts} from '../redux/actions/postsAction'

const HomePage = () => {
	const dispatch = useDispatch()
	const data = useSelector((state) => state.data)
	const [q, setQ] = useState('')
	const [scolumns, setScolumns] = useState(['body', 'title'])
	function search(rows) {
		return rows.filter((row) => scolumns.some((col) => row[col].toString().toLowerCase().indexOf(q) > -1))
	}

	useEffect(() => {
		dispatch(listposts())
	}, [])
	return (
		<>
			<Container className="py-3">
				<Row className="align-items-center">
					<Col md={6}>
						<InputGroup size="md" className="mb-3">
							<FormControl type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search..." aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
						</InputGroup>
					</Col>
					<Col md={6}>
						<div className="d-flex flex-wrap">
							{data.keys.map((column) => (
								<label className="mx-3 checking-box" key={column}>
									<input
										type="checkbox"
										checked={scolumns.indexOf(column) > -1 ? true : false}
										onChange={(e) => {
											scolumns.indexOf(column) > -1 ? setScolumns((prev) => prev.filter((i) => i !== column)) : setScolumns([...scolumns, column])
										}}
									/>
									{column}
								</label>
							))}
						</div>
					</Col>
				</Row>
			</Container>
			<div>
				<HomePageBody posts={search(data.posts)} />
			</div>
		</>
	)
}

export default HomePage
