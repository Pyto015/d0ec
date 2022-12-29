interface ElectricDiagramItem {
	nameOfScheme: string
	diagram: string
	powerFrom: string
	typeOfConnection?: string
	key: number
	by?: string
	quickInfo?: quickInfoArray
}

interface quickInfoEl {
	name: string
	designation: string
}

interface quickInfoArray extends Array<quickInfoEl> {}

interface ElectricDiagramArray extends Array<ElectricDiagramItem> {}

export type {
	ElectricDiagramItem,
	ElectricDiagramArray,
	quickInfoEl,
	quickInfoArray,
}
