import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { AdminSection } from '../components/AdminSection/AdminSection'
import { Admin } from '../pages/Admin/Admin'
import { Blog } from '../pages/Blog/Blog'
import { BlogItem } from '../pages/BlogItem/BlogItem'
import { Calls } from '../pages/Calls/Calls'
import { CallsInfo } from '../pages/CallsInfo/CallsInfo'
import { Home } from '../pages/Home/Home'
import { KnowledgeBase } from '../pages/KnowledgeBase/KnowledgeBase'
import { KnowledgeBaseItem } from '../pages/KnowledgeBaseItem/KnowledgeBaseItem'
import { Login } from '../pages/Login/Login'
import { Meladze } from '../pages/Meladze/Meladze'
import { Register } from '../pages/Register/Register'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/login', element: <Login /> },
			{ path: '/register', element: <Register /> },
			{
				path: '/dashboard',
				element: <Admin />,
				children: [
					{
						path: '/dashboard',
						element: <AdminSection />,
					},
					{ path: '/dashboard/:id', element: <Meladze /> },
					{
						path: '/dashboard/calls',
						element: <Calls />,
					},
					{ path: '/dashboard/calls/:id', element: <CallsInfo /> },
				],
			},
			{ path: '/blog', element: <Blog /> },
			{ path: '/:id', element: <BlogItem /> },
			{ path: '/knowledgeBase', element: <KnowledgeBase /> },
			{ path: '/knowledgeBase/:id', element: <KnowledgeBaseItem /> },
		],
	},
])
