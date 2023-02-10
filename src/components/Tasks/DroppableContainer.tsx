import { Box, Flex, Heading } from '@chakra-ui/react'
import { PureComponent } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import FocusTrap from 'focus-trap-react'

import { Task } from './TasksState'
import { EmptyListPlaceholder } from './EmptyContainer'
import DraggableElement from './DraggableElement'

type DroppableContainerProps = {
	task: Task
}

export default class DroppableContainer extends PureComponent<DroppableContainerProps> {
	render() {
		const { task } = this.props

		return (
			<Box p={6} pl={0}>
				<Flex gap={3} align="center">
					<Heading noOfLines={1} pb={3} pl={6}>
						[{task?.content.length}] {task.name} - {task.id}
					</Heading>
				</Flex>
				<Droppable droppableId={task.id} direction="horizontal">
					{(provided) => (
						<Flex
							overflow="auto hidden"
							gap={1}
							pb={2}
							pl={2}
							sx={{
								scrollbarWidth: 'thin',
							}}
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{!task.content.length ? (
								<EmptyListPlaceholder />
							) : (
								task.content
									.filter((i) => {
										if (i === null) {
											console.log(
												'%cNULL CONTENT FOUND!!!!',
												'color:red;font-weight:bold;background: black',
												task.id,
												task,
												task.content
											)
											return false
										}
										return true
									})
									.map((item, index) => (
										<DraggableElement
											key={index}
											task={task}
											item={item}
											index={index}
										/>
									))
							)}
							{provided.placeholder}
						</Flex>
					)}
				</Droppable>
			</Box>
		)
	}
}
