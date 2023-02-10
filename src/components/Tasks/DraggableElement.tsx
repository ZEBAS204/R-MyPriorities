import { PureComponent } from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'
import { Draggable } from 'react-beautiful-dnd'
import { Task, TaskContent } from './TasksState'

type DraggableElementProps = {
	task: Task
	item: TaskContent
	index: number
}

export default class DraggableElement extends PureComponent<DraggableElementProps> {
	render() {
		const { task, item, index } = this.props

		return (
			<Draggable
				draggableId={`${task.id}-item-${index}`}
				index={index}
				key={index}
			>
				{(provided, snapshot) => (
					<Flex
						bg="#fff"
						p={4}
						align="center"
						direction="column"
						_dark={{
							bg: '#242931',
						}}
						borderRadius={4}
						border="3px solid"
						borderColor={snapshot.draggingOver ? '#7b27c9' : 'rgba(0,0,0,0.1)'}
						userSelect="none"
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						{item.hasIcon ? (
							<>Icon: {item.iconName}</>
						) : item.hasImage ? (
							<Image
								src={item.imageURL}
								alt={item.imageALT || ''}
								objectFit="contain"
								maxH="5em"
								borderRadius="md"
								onError={({ currentTarget }) => {
									currentTarget.alt = 'No image available'
								}}
							/>
						) : null}
						{item.name ? <Text>{item.name}</Text> : null}
					</Flex>
				)}
			</Draggable>
		)
	}
}
