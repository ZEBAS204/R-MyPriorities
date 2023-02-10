import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import SoundButton from './SoundButton'

export const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const isDark = colorMode === 'dark'
	return (
		<SoundButton
			as={IconButton}
			position="fixed"
			top={4}
			right={4}
			aria-label="Toggle Theme"
			icon={isDark ? <SunIcon /> : <MoonIcon />}
			onClick={toggleColorMode}
			zIndex={621}
		/>
	)
}
