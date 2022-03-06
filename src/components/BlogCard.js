import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BlogCard = ({post}) => {
	return (
		<Col md={6} lg={4}>
			<Card style={{ width: '100%', height: '250px', padding: '20px' }}>
				<Card.Title>{post.title}</Card.Title>
				<Card.Text className="mb-2">{post.body.length > 65 ? post.body.slice(0, 62) + '...' : post.body}</Card.Text>
				<Link to={`posts/${post.id}`} className="btn btn-primary mt-auto" variant="primary">
					Go to post
				</Link>
			</Card>
		</Col>
	)
}

export default BlogCard
