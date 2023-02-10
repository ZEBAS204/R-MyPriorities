/*
 * For more information, see: https://github.com/kmkzt/react-hooks-svgdrawing
 */

import { PureComponent, createRef } from 'react'
import { Heading } from '@chakra-ui/react'
import SoundButton from '@components/SoundButton'

import { useSvgDrawing } from 'react-hooks-svgdrawing'
import CanvasDraw from 'react-canvas-draw'

//* ----------------------------------------------------------------
//* See: https://www.npmjs.com/package/react-canvas-draw
//* Example:_ https://github.com/embiem/react-canvas-draw/blob/master/demo/src/index.js
class REACT_CANVAS_DRAW extends PureComponent {
	canvas: any
	constructor(props) {
		super(props)

		this.canvas = createRef()
	}

	render() {
		return (
			<>
				<Heading color="#1f8cf9">REACT-CANVAS-DRAW</Heading>
				<CanvasDraw
					hideGrid
					enablePanAndZoom
					ref={(canvasDraw) => (this.canvas.current = canvasDraw)}
					canvasWidth={500}
					canvasHeight={500}
				/>
				<SoundButton
					onClick={() => {
						console.log(this.canvas?.current)
					}}
				>
					GET CANVAS REF
				</SoundButton>
			</>
		)
	}
}

//* ----------------------------------------------------------------
//* See: https://www.npmjs.com/package/react-hooks-svgdrawing
const REACT_SVG = () => {
	const [renderRef, draw] = useSvgDrawing({
		penWidth: 10, // pen width
		penColor: '#e00', // pen color
		close: false, // Use close command for path. Default is false.
		curve: true, // Use curve command for path. Default is true.
		delay: 5, // Set how many ms to draw points every.
		fill: 'none', // Set fill attribute for path. default is `none`
	})

	return (
		<>
			<Heading color="#1f8cf9">REACT-SKETCH-CANVAS</Heading>
			<div
				style={{ width: '100vw', height: 800, border: '3px dashed #1f8cf9' }}
				ref={renderRef}
			/>
			<SoundButton
				onClick={() => {
					draw.undo()
				}}
			>
				UNDO
			</SoundButton>
			<SoundButton
				onClick={() => {
					draw.clear()
				}}
			>
				CLEAR
			</SoundButton>
			<SoundButton
				onClick={() => {
					console.log(draw.getSvgXML())
				}}
			>
				SAVE
			</SoundButton>
		</>
	)
}

export default function Canvas() {
	return (
		<>
			<REACT_SVG />
			<br />
			<br />
			<REACT_CANVAS_DRAW />
		</>
	)
}
