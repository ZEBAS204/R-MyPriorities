import Head from 'next/head'

export default function Layout({ children, title = '' }) {
	const defaultTitle = 'My Priorities'
	const pageTitle = title?.length ? `${defaultTitle} | ${title}` : defaultTitle

	return (
		<>
			<Head key="main-layout-header">
				<title>{pageTitle}</title>
				<meta property="og:title" content="My page title" key="title" />
				<meta charSet="utf-8" />
			</Head>

			{children}
		</>
	)
}
