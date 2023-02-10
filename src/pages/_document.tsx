import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Document, { DocumentInitialProps, DocumentContext } from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'
import { resetServerContext } from 'react-beautiful-dnd'

export default class AppDocument extends NextDocument {
	/*
	 * This initial props needs to be set so that the server side rendering of NextJS
	 * doesn't conflict with what react-beautiful-dnd is expecting at the client-side
	 */
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const page = await ctx.renderPage()
		const initialProps = await Document.getInitialProps(ctx)
		resetServerContext()

		return { ...initialProps, ...page }
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					{/* Make Color mode persists when you refresh the page */}
					<ColorModeScript initialColorMode="dark" />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
