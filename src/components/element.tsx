import React, { useState } from 'react'
import { ElectricDiagramItem, quickInfoEl } from '../assets/interfaces'
import { Tooltip } from '@material-tailwind/react'
interface ElementProps {
	d: ElectricDiagramItem
}

const Element: React.FC<ElementProps> = ({ d }) => {
	return (
		<div
			key={d.key}
			className={`flex justify-between items-center flex-col p-8 bg-zinc-100 rounded-md shadow-lg text-zinc-900 font-sans min-w-[370px]`}
		>
			<a>
				<h1 className={`text-lg text font-bold underline`}>{d.nameOfScheme}</h1>
			</a>
			<div className={`flex justify-between gap-2 items-center`}>
				<h4>Power from: {d.powerFrom}</h4>
				{d.typeOfConnection ? (
					<>
						<h1>|</h1>
						<h4>Type of connection: {d.typeOfConnection}</h4>
					</>
				) : (
					''
				)}
			</div>
			<pre>{d.diagram}</pre>
			{d.quickInfo
				? d.quickInfo?.map(qi => (
						<div
							className={
								'flex justify-between items-center gap-3 transition-all opacity-100'
							}
						>
							<h3 className={`font-bold font-hack`}>{qi.name}</h3>
							<h3 className={`font-bold font-hack`}>{'<=>'}</h3>
							<h3 className={`font-bold font-hack`}>{qi.designation}</h3>
						</div>
				  ))
				: ''}
			{d.by ? <h3 className='font-bold'>by {d.by}</h3> : ''}
		</div>
	)
}
export default Element
