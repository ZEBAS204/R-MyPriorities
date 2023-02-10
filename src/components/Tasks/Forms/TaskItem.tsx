import { useState } from 'react'
import {
	Box,
	IconButton,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
} from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import { AddIcon } from '@chakra-ui/icons'

import { useTasksState, TaskContent, Task } from '@components/Tasks/TasksState'
import SoundButton from '@components/SoundButton'

//* See: https://www.npmjs.com/package/chakra-react-select
const ItemForm = () => {
	const [isInvalid, setInvalid] = useState(true)
	const [isTaskSelected, setSelected] = useState(false)
	const [taskSelected, setTaskSelected] = useState({
		name: '',
		id: '',
	})

	const handleTaskSelected = ({ label = '', value = '' }, ...rest) => {
		console.log('Changed task selected:', rest)

		if (!label?.length || !value?.length) {
			setSelected(false)
			return
		}

		setTaskSelected({ name: label, id: value })
		setSelected(true)
	}

	return (
		<>
			<FormControl>
				<FormLabel>Select a Task list to edit</FormLabel>
				<Select
					placeholder="Select a list"
					name="Lists"
					options={Tasks.get().map((task) => ({
						label: task.name,
						value: task.id,
					}))}
					onChange={handleTaskSelected}
					useBasicStyles
				/>

				{!isTaskSelected ? (
					<></>
				) : (
					<>
						<br />
						<Input
							placeholder={taskSelected ? taskSelected.name : 'Task Name'}
						></Input>
						<FormHelperText>You can change the Task name!</FormHelperText>
					</>
				)}
			</FormControl>
		</>
	)
}

type TaskItemModalProps = {
	Task: Task
}

export default function TaskItemModal({ Task }: TaskItemModalProps) {
	const [isOpen, toggleOpen] = useState(false)

	const handleClose = () => toggleOpen(false)
	const handleOpen = () => toggleOpen(true)
	const handleData = () => {
		toggleOpen(false)

		if (Task.promised) return

		Tasks[Tasks.length].set({
			id: new Date().valueOf().toString(),
			name: 'IM A NEW STATE FROM THE STATE BUTTON :D',
			content: [
				{
					hasIcon: true,
					iconName: 'a',
					name: 'TEST - Test - tesT - test - tEST - TeSt - tEsT',
				},
			],
		})
	}

	return (
		<>
			<Modal
				isOpen={isOpen}
				onClose={handleClose}
				motionPreset="slideInBottom"
				isCentered={false}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader />
					<ModalBody>
						<ItemForm />
					</ModalBody>
					<ModalFooter>
						<SoundButton variant="ghost" mr={3} onClick={handleClose}>
							Cancel
						</SoundButton>
						<SoundButton onClick={handleData}>Add</SoundButton>
					</ModalFooter>
				</ModalContent>
			</Modal>

			<SoundButton
				as={IconButton}
				icon={<AddIcon />}
				aria-label="Create new list"
				borderRadius="md"
				size="lg"
				position="fixed"
				bottom={4}
				right={4}
				zIndex={621}
				onClick={handleOpen}
			/>
		</>
	)
}
