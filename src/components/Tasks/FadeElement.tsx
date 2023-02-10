import { PureComponent } from 'react'
import { Box } from '@chakra-ui/react'

export default class FadeElement extends PureComponent {
	render() {
		return (
			<Box
				h="100%"
				w="3em"
				top={0}
				right="10%"
				position="absolute"
				pointerEvents="none"
				bgGradient="linear(to-r, transparent, gray.50, gray.50)"
				_dark={{
					bgGradient: 'linear(to-r, transparent, gray.900, gray.900)',
				}}
			/>
		)
	}
}
