import { Flex, Heading, Box } from '@chakra-ui/react'
import SparklesIcon from '@public/static/sparkles.svg'

const DefaultTitle = () => {
	const Sparkles = () => <Box as={SparklesIcon} mx={5} />

	return (
		<Flex align="center">
			<Sparkles />
			My Priorities
			<Sparkles />
		</Flex>
	)
}

export const Hero = ({ title }: { title?: string }) => (
	<Flex align="center" alignSelf="center">
		<Heading
			p={3}
			fontSize="6vw"
			bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
			bgClip="text"
			variant="title"
		>
			{title ?? <DefaultTitle />}
		</Heading>
	</Flex>
)
