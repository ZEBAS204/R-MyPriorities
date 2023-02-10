import { Box, Center, Heading, Text as CText } from '@chakra-ui/react'
import SoundButton from '@components/SoundButton'
import Link from 'next/link'
import { DarkModeSwitch } from '@components/DarkModeSwitch'

import Arrow from '@public/static/arrow.svg'

const Text = ({ children, color, ...props }: any) => (
	<CText
		mb={6}
		fontSize={{
			base: 'lg',
			md: 'xl',
		}}
		color={color || 'gray.500'}
		{...props}
		children={children}
	/>
)

export default function () {
	return (
		<Center h="100vh" w="100vw">
			<Box
				w={{
					base: 'full',
					md: 11 / 12,
					xl: 8 / 12,
				}}
				textAlign="center"
			>
				<Heading
					as="h1"
					fontWeight="extrabold"
					color="#1f8cf9"
					fontSize={{
						base: '8xl',
						md: '9xl',
					}}
				>
					404
				</Heading>
				<Heading
					mb={3}
					fontSize={{
						base: '4xl',
						md: '5xl',
					}}
					fontWeight={{
						base: 'bold',
						md: 'extrabold',
					}}
					color="gray.900"
					_dark={{
						color: 'gray.100',
					}}
				>
					Sorry, We Couldn't Find That Page
				</Heading>
				<Text>
					Sorry, looks like you've ended up stranded. Luckily, we're prepared
					for this!
					<br />
					Jump aboard our life raft and we'll have you back on terra firma in no
					time.
				</Text>
				<Center>
					<Box display="flex" flexDirection="column" alignItems="center">
						<Text color="#1f8cf9">
							Or just click this fancy button of here.
						</Text>
						<Box as={Arrow} w="10em" h="10em" fill="#1f8cf9" />
					</Box>
					<Link href="/">
						<SoundButton
							variant="solid"
							size="lg"
							type="submit"
							colorScheme="blue"
							cursor="pointer"
							bg="#1f8cf9"
						>
							Take Me Home Baby!
						</SoundButton>
					</Link>
				</Center>
			</Box>
			<DarkModeSwitch />
		</Center>
	)
}
