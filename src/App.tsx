import { useState } from 'react'
import diagrams from './assets/diagrams'
import Element from './components/element'
import { ElectricDiagramItem } from './assets/interfaces'
const App = () => {
	//@ts-ignore
	const daar = JSON.parse(sessionStorage.getItem('diagrams'))
		? //@ts-ignore
		  JSON.parse(sessionStorage.getItem('diagrams'))
		: diagrams
	console.log(daar)
	return (
		<div className='App flex justify-center items-center'>
			<div className='flex flex-wrap gap-5 p-8'>
				{daar.map((d: ElectricDiagramItem) => (
					<Element key={d.key} d={d} />
				))}
			</div>
		</div>
	)
}

export default App
