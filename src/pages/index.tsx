import { Text, Code, VStack } from '@chakra-ui/react'
import { Hero } from '@components/Home/Hero'
import { Container } from '@components/Container'
import { Main } from '@components/Home/Main'
import { CTA } from '@components/Home/CTA'
import { Footer } from '@components/Footer'
import { DarkModeSwitch } from '@components/DarkModeSwitch'
import Layout from '@components/layout'

const Index = () => (
	<Layout>
		<Container height="100vh">
			<VStack justifyContent="center" alignItems="center" height="100vh">
				<Hero />

				<Main>
					<Text color="text">
						Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>{' '}
						+ <Code>TypeScript</Code>.
					</Text>
				</Main>
				<CTA />
				<Footer />
			</VStack>

			<DarkModeSwitch />
		</Container>
	</Layout>
)

export default Index
