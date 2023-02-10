import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Tasks = dynamic(import('./TaskList'))

//* We need to wrap the Tasks component inside this
//* function to ensure that the window is ready to use.
//* See: https://github.com/atlassian/react-beautiful-dnd/issues/1756#issuecomment-735369084
export default function PriorityList() {
	const [winReady, setwinReady] = useState(false)

	useEffect(() => setwinReady(true), [])

	return winReady ? <Tasks /> : <></>
}
