import { useEffect } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { Flex, VStack, StackDivider } from '@chakra-ui/react'
import { useTasksState, Task, none } from './TasksState'
import { LoadingListPlaceholder, EmptyPlaceholder } from './EmptyContainer'
import TrashDragContainer from './TrashContainer'
import DroppableContainer from './DroppableContainer'
import FadeElement from './FadeElement'

export default function TaskList() {
	const tasksState = useTasksState()

	useEffect(() => {
		console.log('%cTasks State:', 'color:#00ff00', tasksState)
	})

	const removeFromList = (list: Array<any>, index: number) => {
		const result = Array.from(list)
		const [removed] = result.splice(index, 1)
		return [removed, result]
	}

	const addToList = (list: Array<any>, index: number, element: any) => {
		const result = Array.from(list)
		result.splice(index, 0, element)
		return result
	}

	const onDragEnd = (result) => {
		const { destination, source } = result

		if (!result || !destination) {
			console.log('%cDRAG IGNORED', 'color:orange', result)
			return
		}
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			console.log('%cDRAG IGNORED', 'color:orange', result)
			return
		}

		console.log('%cDrag END:', 'color:cyan', result)

		const _STATE = tasksState.get()
		const sourceList = _STATE.findIndex(
			(item) => item.id === source.droppableId
		)
		const destinationList = _STATE.findIndex(
			(item) => item.id === destination.droppableId
		)

		//* The item was thrown into the trash container, remove it
		if (destination.droppableId === 'trash-container') {
			console.log('%cREMOVED ELEMENT!', 'color: fuchsia', result)
			tasksState[sourceList].content[source.index].set(none)
			return
		}

		//* The item movement took place in the same list, update the array index
		if (source.droppableId === destination.droppableId) {
			console.log('%cChanged Element Index!', 'color: cornflowerblue', result)
			tasksState[destinationList].content.set((i) => {
				const movedItem = i.splice(source.index, 1)[0]
				i.splice(destination.index, 0, movedItem)
				console.log('SPLICE!', [destination.index, source.index], i, result)
				return i
			})
			return
		}

		//* The item was moved between rows
		tasksState.set((e) => {
			const movedItem = e[sourceList].content.splice(source.index, 1)[0]
			e[destinationList].content.splice(destination.index, 0, movedItem)
			console.log('%cMoved Element!', 'color: cyan', e, movedItem)
			return e
		})
	}

	return (
		<Flex py={10}>
			{tasksState.promised ? (
				<LoadingListPlaceholder />
			) : // If no tasks, show the an empty banner message
			!tasksState?.length ? (
				<EmptyPlaceholder />
			) : // Tasks promise was rejected
			tasksState.error ? (
				<h1>
					Looks like something went wrong... Please try refreshing the page!
				</h1>
			) : (
				// If we have all, then display the tasks
				<DragDropContext onDragEnd={onDragEnd}>
					<VStack
						spacing={2}
						align="stretch"
						w="100%"
						maxW="90%"
						divider={
							<StackDivider
								h={2}
								maxWidth="60%"
								border="none"
								borderRadius="0 5px 5px 0"
								bgGradient="linear(to-l, transparent, #7928CA, #FF0080)"
								opacity={0.8}
								_dark={{
									bgGradient: 'linear(to-l, transparent, #7928CA, #FF0080)',
								}}
							/>
						}
					>
						<h2>Total Tasks: {tasksState.length}</h2>
						{tasksState.get().map((task: Task, key) => (
							<DroppableContainer task={task} key={key} />
						))}
					</VStack>
					<FadeElement />
					<TrashDragContainer />
				</DragDropContext>
			)}
		</Flex>
	)
}
