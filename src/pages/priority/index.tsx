import { Container } from '@components/Container'
import { DarkModeSwitch } from '@components/DarkModeSwitch'
import { Hero } from '@components/Home/Hero'
import BackButton from '@components/BackButton'
import RestoreButton from '@components/RestoreButton'
import TaskList from '@components/Tasks'
import { AddNewItem } from '@/components/Tasks/Forms'

import Layout from '@/components/layout'

export default function EmptyPriority() {
	return (
		<Layout title="Lists">
			<Container>
				<BackButton />
				<DarkModeSwitch />
				<RestoreButton />
				<Hero title="My Priorities" />
				<TaskList />
				<AddNewItem />
			</Container>
		</Layout>
	)
}
