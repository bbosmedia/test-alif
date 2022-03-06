import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import SinglePostPage from './pages/SinglePostPage'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/posts/:id' element={<SinglePostPage />} />
			</Routes>
		</div>
	)
}

export default App
