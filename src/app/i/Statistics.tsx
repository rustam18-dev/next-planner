'use client'

import Loader from '@/components/ui/Loader'

import { useProfile } from '@/hooks/useProfile'

export default function Statistics() {
	const { data, isLoading } = useProfile()

	return isLoading ? <Loader /> :
		<div className='grid grid-cols-4 gap-12 mt-7'>
			{data?.statistics.length ? data.statistics.map(statistic => {
				return (
					<div className='bg-border/5 rounded p-layout text-center hover:-translate-y-3
						transition-transform duration-500'
							 key={statistic.label}
					>
						<div className='text-xl'>{statistic.label}</div>
						<div className='text-xl font-semibold'>{statistic.value}</div>
					</div>
				)
			}) : <div>Statistics not loaded!</div>}
  	</div>
}
