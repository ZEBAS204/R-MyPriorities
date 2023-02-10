import Link from 'next/link'
import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from '../Container'

export const CTA = () => (
	<Container
		flexDirection="row"
		position="fixed"
		bottom={0}
		width="full"
		maxWidth="3xl"
		py={3}
	>
		<Link href="/priority">
			<ChakraLink
				as={Button}
				variant="outline"
				rounded="button"
				flexGrow={1}
				mx={2}
				width="full"
			>
				My Priorities
			</ChakraLink>
		</Link>
	</Container>
)
