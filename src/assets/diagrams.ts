import { ElectricDiagramArray } from './interfaces'

const diagrams: ElectricDiagramArray = [
	{
		nameOfScheme: 'Simple lamp diagram',
		diagram: `								         
┌─────────────⏽+┃ ─ ─ ─ ⏽-┃────────────┐
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
└──────────/  ──────────────(X)────────┘
`,
		powerFrom: 'Battery',
		typeOfConnection: 'triangle',
		key: 1,
		quickInfo: [
			{
				name: 'Lamp',
				designation: '(X)',
			},
			{
				name: 'Battery',
				designation: '⏽+┃ ─ ─ ─ ⏽-┃',
			},
			{
				name: 'Key',
				designation: `                    
							/
				`,
			},
		],
	},
	{
		nameOfScheme: 'Simple lamp diagram',
		diagram: `								         
┌─────────────⏽+┃ ─ ─ ─ ⏽-┃────────────┐
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
└──────────/  ──────────────(X)────────┘
`,
		powerFrom: 'Battery',
		typeOfConnection: 'triangle',
		key: 1,
	},
	{
		nameOfScheme: 'Simple lamp diagram',
		diagram: `								         
┌─────────────⏽+┃ ─ ─ ─ ⏽-┃────────────┐
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
└──────────/  ──────────────(X)────────┘
`,
		powerFrom: 'Battery',
		typeOfConnection: 'triangle',
		key: 1,
		by: 'Pyto',
	},
	{
		nameOfScheme: 'Simple lamp diagram',
		diagram: `								         
┌─────────────⏽+┃ ─ ─ ─ ⏽-┃────────────┐
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
│                                      │
└──────────/  ──────────────(X)────────┘
`,
		powerFrom: 'Battery',
		typeOfConnection: 'triangle',
		key: 1,
	},
]
sessionStorage.setItem('d', 1)
export default diagrams
