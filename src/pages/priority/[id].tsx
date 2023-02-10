import { useRouter } from 'next/router'
import { Lists, ListItem } from '@components/List/lists-data'

const isInList = (id, list) => list.filter((item) => item.id === id)

const ListDisplay = (id, list: Lists) => {
	if (!isInList(id, list)) return

	const content = list.filter((item) =>
		item.id === id ? item.content : false
	)!

	return (
		<li>
			{content.map((item: any) => (
				<i>
					Name: {item.name}, Contents: {item}
				</i>
			))}
		</li>
	)
}

export default function Priority() {
	const { query } = useRouter()
	return (
		<>
			<h1>List item ID: {JSON.stringify(query)} </h1>
			<h1>Is item ID in a list?: {JSON.stringify(query)}</h1>
		</>
	)
}
