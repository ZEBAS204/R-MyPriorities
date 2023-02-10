import { forwardRef } from 'react'
import { chakra, Button, ButtonProps, IconButtonProps } from '@chakra-ui/react'
import useSound from 'use-sound'

//* Public
const soundURL = '/static/pop_sound.mp3'

type SoundButtonProps = (ButtonProps | IconButtonProps) & {
	onClick?: () => void
}

/**
 * High order component to play a sound when clicked
 */
const SoundButton = forwardRef(
	(
		{ children, onClick, as, ...restProps }: SoundButtonProps,
		ref: React.Ref<HTMLButtonElement>
	) => {
		const [playSound] = useSound(soundURL)

		const soundClick = (event: any) => {
			//* Play the sound
			playSound()

			//* Call the original component onClick function
			if (onClick) onClick(event)
		}

		return (
			<chakra.button
				as={as ?? Button}
				ref={ref}
				onClick={soundClick}
				{...restProps}
			>
				{children}
			</chakra.button>
		)
	}
)

export default SoundButton
