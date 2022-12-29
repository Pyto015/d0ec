import React, { useState } from 'react'
import { ElectricDiagramItem } from './assets/interfaces'
import diagrams from './assets/diagrams'
const Form = () => {
	const [nameOfScheme, setNameOfScheme] = useState<string>('')
	const [diagram, setDiagram] = useState<string>(``)
	const [powerFrom, setPowerFrom] = useState<string>('')
	const [isTypeOfConnection, setIsTypeOfConnection] = useState<boolean>(false)
	const [typeOfConnection, setTypeOfConnection] = useState<string>('')
	const [by, setBy] = useState<string>()

	const handleClick = () => {
		const obj: ElectricDiagramItem = {
			nameOfScheme: nameOfScheme,
			diagram: diagram,
			powerFrom: powerFrom,
			key: Math.floor(Math.random() * diagrams.length),
			by: by,
			typeOfConnection: typeOfConnection,
		}

		diagrams.push(obj)
		sessionStorage.setItem('diagrams', JSON.stringify(diagrams))

		console.log(JSON.parse(sessionStorage.diagrams))
	}

	return (
		<div className='flex justify-between flex-col items-center gap-1 w-9/12'>
			<input
				type='text'
				className='rounded-md border-[2px] border-zinc-400 p-1 w-[256px] placeholder:text-zinc-900 m-2'
				placeholder='Enter name of this scheme:'
				value={nameOfScheme}
				onChange={e => setNameOfScheme(e.target.value)}
			/>
			<div className='w-full h-[2px] bg-zinc-800'></div>
			<label form='diagram'>Enter you diagram:</label>
			<textarea
				name='diagram'
				value={diagram}
				onChange={e => setDiagram(e.target.value)}
				className={
					'p-1 rounded-md m-2 border-[2px] border-zinc-400 w-full h-[500px] resize-none font-hack'
				}
			></textarea>
			<div className='w-full h-[2px] bg-zinc-800'></div>
			<select className='w-[256px] border-[2px] border-zinc-400 rounded-md m-2'>
				<option>Power from:</option>
				<option onClick={() => setPowerFrom('Battery')}>Battery</option>
				<option onClick={() => setPowerFrom('Rozetka')}>Rozetka</option>
			</select>
			<div className='w-full h-[2px] bg-zinc-800'></div>
			<label form='type'>Do you like to write type of connection?</label>
			<input
				type={'checkbox'}
				name='type'
				onChange={e => {
					if (e.target.checked) {
						setIsTypeOfConnection(true)
						console.log(!isTypeOfConnection)
					} else if (!e.target.checked) {
						setIsTypeOfConnection(false)
						console.log(!isTypeOfConnection)
					}
				}}
			/>
			{isTypeOfConnection ? (
				<>
					<input
						value={typeOfConnection}
						type='text'
						onChange={e => setTypeOfConnection(e.target.value)}
						className='rounded-md border-[2px] border-zinc-400 p-1 w-[256px] placeholder:text-zinc-900 m-2'
					/>
					<div className='w-full h-[2px] bg-zinc-800'></div>
					<label form='by'>By :</label>
					<input
						name='by'
						type={'text'}
						className={
							'rounded-md border-[2px] border-zinc-400 p-1 w-[256px] placeholder:text-zinc-900 m-2'
						}
						value={by}
						onChange={e => setBy(e.target.value)}
					/>
				</>
			) : (
				<>
					<div className='w-full h-[2px] bg-zinc-800'></div>
					<label form='by'>By :</label>
					<input
						name='by'
						type={'text'}
						className={
							'rounded-md border-[2px] border-zinc-400 p-1 w-[256px] placeholder:text-zinc-900 m-2'
						}
						value={by}
						onChange={e => setBy(e.target.value)}
					/>
				</>
			)}
			<button
				onClick={handleClick}
				className='bg-orange-500 rounded-md p-2 m-2 text-white'
			>
				Upload
			</button>
		</div>
	)
}

export default Form
