import React, { useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { singlepost } from '../redux/actions/postAction'
import { Link } from 'react-router-dom'

const SinglePostPage = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const post = useSelector((state) => state.post)

	useEffect(() => {
		dispatch(singlepost(id))
	}, [id])

	if (post.loading) {
		return (
			<Container>
				<div className="d-flex justify-content-center">
					<Spinner></Spinner>
				</div>
			</Container>
		)
	}
	if (post.error) {
		return (
			<Container>
				<div className="d-flex justify-content-center">
					<p>ERROR</p>
				</div>
			</Container>
		)
	}
	return (
		<Container className="my-5">
			<Link className="btn btn-primary mb-5" to="/">
				Go Back
			</Link>
			<h2>Title: {post.post.title}</h2>
			<p className="py-3">{post.post.body}</p>
			<b className="py-3 text-bold">User ID: {post.post.userId}</b>
		</Container>
	)
}

export default SinglePostPage
