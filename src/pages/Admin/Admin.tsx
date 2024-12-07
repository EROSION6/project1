import { Outlet } from 'react-router-dom'
import { AdminOption } from '../../components/AdminOption/AdminOption'
import { AdminSidebar } from '../../components/AdminSidebar/AdminSidebar'
import './admin.css'

export const Admin = () => {
	return (
		<div className='admin'>
			<div className='admin-content'>
				<div className='admin-left-content'>
					<AdminOption />
					<AdminSidebar />
				</div>
				<Outlet />
			</div>
		</div>
	)
}
