import { IconButton } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import SoundButton from './SoundButton'
import Link from 'next/link'

export default function BackButton() {
	return (
		<Link href="/">
			<SoundButton
				as={IconButton}
				icon={<ArrowBackIcon />}
				aria-label="Back to home"
				variant="solid"
				borderRadius="full"
				transform="rotate(45deg)"
				boxShadow="base"
				position="fixed"
				top={-3}
				left={-3}
				zIndex={621}
				transition="200ms"
				_hover={{
					top: -1.5,
					left: -1.5,
				}}
			/>
		</Link>
	)
}
