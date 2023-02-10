import { useMemo } from 'react'
import {
	Box,
	Flex,
	VStack,
	Text,
	Heading,
	ScaleFade,
	Skeleton,
} from '@chakra-ui/react'
import GhostIcon from '@public/static/ghost.svg'
import TextBox from '@public/static/text-box.svg'

const BoldText = ({ children, ...rest }) => (
	<Text
		as="i"
		fontWeight={600}
		color="purple.500"
		_dark={{ color: 'purple.300' }}
		children={children}
		{...rest}
	/>
)

const EmptyPlaceholder = () => (
	<ScaleFade in={true}>
		<Flex
			px={10}
			py={6}
			m={6}
			border="3px dashed"
			borderColor="purple.400"
			bg="blackAlpha.100"
			_dark={{
				bg: 'whiteAlpha.50',
			}}
			align="center"
			rounded="md"
		>
			<Box as={TextBox} w="5rem" h="5rem" mr={8} />

			<Box>
				<Heading>This place seems a little too empty...</Heading>
				<Text fontSize="2xl">
					Try <BoldText>adding a new task</BoldText> using that{' '}
					<BoldText>fancy button</BoldText> at the{' '}
					<BoldText>bottom right corner</BoldText> to fill this dark place!
				</Text>
			</Box>
		</Flex>
	</ScaleFade>
)

const EmptyListPlaceholder = () =>
	useMemo(
		() => (
			<ScaleFade in={true}>
				<Flex
					p={1}
					pl={2}
					bg="blackAlpha.100"
					_dark={{
						bg: 'whiteAlpha.50',
					}}
					align="center"
					rounded="md"
				>
					<Box as={GhostIcon} w="5rem" h="5rem" mr={2} />
					<Text>
						Looks like someone has removed all items and awakened the{' '}
						<BoldText>Ghost !!!</BoldText>
						<br />
						<BoldText>Quick</BoldText>, try adding a new item or removing the
						list to make him disappear.
					</Text>
				</Flex>
			</ScaleFade>
		),
		[]
	)

const LoadingListPlaceholder = () => (
	<Flex px={10} w="100%">
		<VStack w="90%" gap={10} align="left">
			{[...Array(5)].map((_, i) => (
				<Flex direction="column" gap={3} key={i}>
					<Skeleton h="2em" w={60} />
					<Flex gap={5}>
						{[...Array(9)].map((_, j) => (
							<Skeleton key={j} h={14} w={36} />
						))}
					</Flex>
				</Flex>
			))}
		</VStack>
		<Skeleton w="10%" />
	</Flex>
)

export { EmptyPlaceholder, EmptyListPlaceholder, LoadingListPlaceholder }
