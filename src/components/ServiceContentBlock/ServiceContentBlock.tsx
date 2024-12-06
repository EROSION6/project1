import React from 'react'

interface IServiceContentBlock {
	id: string
	title: string
	children: React.ReactNode
}

export const ServiceContentBlock = ({
	id,
	title,
	children,
}: IServiceContentBlock) => {
	return (
		<div id={id} className='main-functions-content-block'>
			<h3 className='main-functions-content__title'>{title}</h3>
			<div className='main-functions-content-block-content'>{children}</div>
		</div>
	)
}
