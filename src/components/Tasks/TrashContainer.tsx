import { PureComponent } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Center } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

export default class TrashDragContainer extends PureComponent {
	render() {
		return (
			<Droppable droppableId="trash-container" direction="vertical">
				{(provided) => (
					<Center
						m={2}
						w="10%"
						border="3px dashed red"
						borderRadius="md"
						cursor="pointer"
						bg="#ff00000d"
						opacity={0.2}
						overflow="hidden"
						_hover={{
							opacity: 1,
						}}
						transition="200ms linear"
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						<DeleteIcon w={10} h={10} position="absolute" color="red.500" />
						{provided.placeholder}
					</Center>
				)}
			</Droppable>
		)
	}
}
