'use client'

import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/color.constants'

import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'
import { Resizable } from 're-resizable'
import { useEffect, useState } from 'react'

export function Sidebar() {
	const [width, setWidth] = useState(() => {
		const savedWidth = localStorage.getItem('sidebarWidth');
		return savedWidth ? parseInt(savedWidth) : 200; // 200 - значение по умолчанию
	});

	useEffect(() => {
		localStorage.setItem('sidebarWidth', String(width));
	}, [width]);

	const handleResizeStop = (e, direction, ref) => {
		setWidth(ref.style.width.replace('px', ''));
	};

	return (
		<Resizable
			minWidth={150}
			maxWidth={500}
			size={{ width: `${width}px`, height: '100%' }}
			onResizeStop={handleResizeStop}
			enable={{
				top: false,
				right: true,
				bottom: false,
				left: false,
				topRight: false,
				bottomRight: false,
				bottomLeft: false,
				topLeft: false,
			}}
		>
			<aside className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'>
				<div>
					<Link
						href='/'
						className='flex items-center gap-2.5 p-layout border-b border-b-border'
					>
						<GanttChartSquare
							color={COLORS.primary}
							size={38}
						/>
						<span className='text-2xl font-bold relative'>
                            Planner Record
                            <span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
																	beta
                            </span>
                        </span>
					</Link>
					<div className='p-3 relative'>
						<LogoutButton />
						{MENU.map(item => (
							<MenuItem
								item={item}
								key={item.link}
							/>
						))}
					</div>
				</div>
				<footer className='text-xs opacity-40 font-normal text-center p-layout'>
					2024 &copy; With love from{' '}
					<a
						href='https://www.youtube.com/c/redgroup/?sub_confirmation=1'
						target='_blank'
						rel='noreferrer'
						className='hover:text-primary text-brand-300 transition-colors'
					>
						RED Group
					</a>
					. <br /> All rights reserved.
				</footer>
			</aside>
		</Resizable>
	);
}
