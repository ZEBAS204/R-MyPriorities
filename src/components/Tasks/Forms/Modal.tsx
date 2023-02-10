import { useState } from 'react'
import {
	Box,
	Skeleton,
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
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import { AddIcon } from '@chakra-ui/icons'

import { useTasksState } from '@components/Tasks/TasksState'
import SoundButton from '@components/SoundButton'

const TabSound = ({ children }) => <SoundButton as={Tab} children={children} />

//* See: https://www.npmjs.com/package/chakra-react-select
const NewItemForm = () => {
	const Tasks = useTasksState()

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
			<FormControl isInvalid={isInvalid}>
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

const NewTaskForm = () => {
	const Tasks = useTasksState()

	return (
		<>
			<Select
				isInvalid
				tagVariant="outline"
				selectedOptionColor="purple"
				placeholder="Select a list"
				name="Lists"
				hasStickyGroupHeaders
				options={Tasks.get().map((task) => ({
					label: task.name,
					value: task.id,
				}))}
			/>

			{/* This will show up with a red border, and grayed out */}
			<FormControl isInvalid isDisabled>
				<FormLabel>Invalid & Disabled Select</FormLabel>
				<Select />
				<FormErrorMessage>
					This error message shows because of an invalid FormControl
				</FormErrorMessage>
			</FormControl>
		</>
	)
}

const LoadingContent = () => (
	<>
		<ModalBody>
			<Box display="flex" justifyContent="center" gap={5}>
				<Skeleton h={10} w={40} borderRadius="full" />
				<Skeleton h={10} w={40} borderRadius="full" />
			</Box>
			<Box display="flex" flexDir="column" gap={5} pt={5}>
				<Skeleton h={8} w="100%" />
				<Skeleton h={8} w="100%" />
				<Skeleton h={8} w="100%" />
			</Box>
		</ModalBody>
		<ModalFooter>
			<Skeleton h={8} w={20} mr={3} />
			<Skeleton h={8} w={20} />
		</ModalFooter>
	</>
)

export default function AddNewItemModal() {
	const Tasks = useTasksState()
	const [isOpen, toggleOpen] = useState(false)

	const handleClose = () => toggleOpen(false)
	const handleOpen = () => toggleOpen(true)
	const handleData = () => {
		toggleOpen(false)

		if (Tasks.promised) return

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
					{Tasks.promised || Tasks.error ? (
						<LoadingContent />
					) : (
						<Tabs variant="soft-rounded" isFitted>
							<ModalHeader>
								<TabList gap={5}>
									<TabSound>TASK</TabSound>
									<TabSound>TASK ITEM</TabSound>
								</TabList>
							</ModalHeader>
							<ModalBody>
								<TabPanels>
									<TabPanel>
										<NewTaskForm />
									</TabPanel>
									<TabPanel>
										<NewItemForm />
									</TabPanel>
								</TabPanels>
							</ModalBody>
							<ModalFooter>
								<SoundButton variant="ghost" mr={3} onClick={handleClose}>
									Cancel
								</SoundButton>
								<SoundButton onClick={handleData}>Add</SoundButton>
							</ModalFooter>
						</Tabs>
					)}
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
