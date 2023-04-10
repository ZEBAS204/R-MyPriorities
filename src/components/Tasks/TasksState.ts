/**
 * Allows to control the state with hooks
 * ? For more information see: https://hookstate.js.org/docs/getting-started
 */

import { useHookstate, extend } from '@hookstate/core'
import { broadcasted } from '@hookstate/broadcasted'
import { localstored } from '@hookstate/localstored'

export { none } from '@hookstate/core'

export interface TaskContent {
	name?: string

	hasIcon?: boolean
	iconName?: string

	hasImage?: boolean
	imageURL?: string
	imageALT?: string
}

export interface Task {
	id: string
	name: string
	content: Array<TaskContent>
	isPinned?: boolean
}

// Fake data generator
const generator = () =>
	Array.from(
		{
			length: Math.floor(Math.abs(Math.random() * (5 - 20 + 1)) + 5) | 5,
		},
		(_, i) => {
			const min = 1
			const max = 10
			const random = Math.random() * (max - min) + min

			return {
				...(i % 2 === 0
					? {
							hasIcon: true,
							iconName: `icon-${i}`,
					  }
					: {
							hasImage: true,
							// Litle hack to make the browser think that the url is different
							imageURL: `https://picsum.photos/200?${random}`,
					  }),
				name: random,
			}
		}
	)

const taskState = [
	{
		id: 'task-1',
		name: 'Discover Hookstate',
		content: generator(),
	},
	{
		id: 'task-2',
		name: 'Replace Redux by Hookstate',
		content: generator(),
	},
	{
		id: 'task-3',
		name: 'Enjoy simpler code and faster application',
		content: generator(),
	},
	{
		id: 'task-image',
		name: 'I like to break UIs in my free time!',
		content: [
			{
				hasImage: true,
				imageURL:
					'https://bobbyhadz.com/images/blog/typescript-ignore-property-does-not-exist-on-type/banner.webp',
			},
		],
	},
	{
		id: 'task-no-image',
		name: 'I have a broken image 😈',
		content: [
			{
				hasImage: true,
				imageURL: 'https://unknownimage.com/a.png',
				name: '😈😈😈',
			},
		],
	},
]

const extensions = () => {
	return extend(
		// Allow to sync data between tabs
		broadcasted({
			// topic is optional,
			// if it is not defined, the extension requires and
			// uses the identifier from the @hookstate/identifiable
			topic: 'tasks-sync-channel',
		}) /*
		localstored({
			// key is optional,
			// if it is not defined, the extension requires and
			// uses the identifier from the @hookstate/identifiable
			key: 'tasks-data',
			initializer: async () => {
				console.log('INITIALIZER????')
				return Promise.resolve()
			},
			engine: {
				getItem: async (key) => Promise.resolve('TEST'),

				setItem: async (key, value) => {
					console.log('set key, value', key, value)
					return Promise.resolve()
				},
				removeItem: async (key) => {
					console.log('remove key', key)
					return Promise.resolve()
				},
			},
		})
		*/
	)
}

export const useTasksState = () => {
	//* This function exposes the state directly.
	//* i.e. the state is accessible directly outside of this module.
	const state = useHookstate(taskState /*, extensions()*/)
	return state
}

// for example purposes, let's update the state outside of a React component
/*
setTimeout(
	() =>
		taskState[taskState.length].set({
			id: '100',
			name: 'Spread few words about Hookstate',
			content: [
				{
					hasImage: true,
					imageURL:
						'https://bobbyhadz.com/images/blog/typescript-ignore-property-does-not-exist-on-type/banner.webp',
					name: 'IM A NEW STATE!',
				},
			].concat(generator()),
		}),
	6000
)
*/
