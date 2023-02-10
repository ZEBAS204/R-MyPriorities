import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Canvas = dynamic(import('./Canvas'))

//* We need to wrap the Canvas component inside this
//* function to ensure that the window is ready to use.
export default function PriorityList() {
	const [winReady, setwinReady] = useState(false)

	useEffect(() => setwinReady(true), [])

	return winReady ? <Canvas /> : <></>
}
