import { Container } from '@components/Container'
import { DarkModeSwitch } from '@components/DarkModeSwitch'
import Layout from '@/components/layout'
import BackButton from '@components/BackButton'
import Canvas from '@components/Canvas'

export default function EmptyPriority() {
	return (
		<Layout title="Canvas">
			<Container>
				<BackButton />
				<DarkModeSwitch />
				<Canvas />
			</Container>
		</Layout>
	)
}
