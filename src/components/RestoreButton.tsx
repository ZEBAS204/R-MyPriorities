import { useRef } from 'react'
import {
	IconButton,
	useDisclosure,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useTasksState, none } from './Tasks/TasksState'
import SoundButton from './SoundButton'

/**
 * Allows to restore the application to its defaults.
 * All data will be erased and the page refreshed.
 * An comfirmation popup will be displayed
 */
export default function RestoreButton() {
	const taskState = useTasksState()

	const { isOpen, onOpen, onClose } = useDisclosure()
	const cancelRef = useRef()

	const handleRestore = () => {
		if (typeof window === 'undefined') return
		if (taskState.promised) return

		taskState.set([])
		onClose()
		/*
		window.localStorage.clear()
		location.reload()
		*/
	}

	return (
		<>
			<SoundButton
				as={IconButton}
				position="fixed"
				bottom={20}
				right={4}
				aria-label="Toggle Theme"
				colorScheme="red"
				icon={<DeleteIcon />}
				onClick={onOpen}
				zIndex={621}
			/>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
				motionPreset="slideInBottom"
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader>DELETE ALL DATA</AlertDialogHeader>

						<AlertDialogBody>
							You can't undo this action afterwards.
						</AlertDialogBody>

						<AlertDialogFooter>
							<SoundButton ref={cancelRef} onClick={onClose}>
								Cancel
							</SoundButton>
							<SoundButton colorScheme="red" onClick={handleRestore} ml={3}>
								Delete All
							</SoundButton>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	)
}
