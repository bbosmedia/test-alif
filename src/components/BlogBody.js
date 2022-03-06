import React from 'react'
import { Row } from 'react-bootstrap'

import BlogCard from './BlogCard'

const BlogBody = ({posts}) => {
	return (
		<>
			{posts.length > 0 ? (
				<Row style={{ rowGap: '25px' }}>
					{posts.map((post) => (
						<BlogCard key={post.id} post={post} />
					))}
				</Row>
			) : (
				<p className="t-alig-center">No Posts Found</p>
			)}
		</>
	)
}

export default BlogBody
