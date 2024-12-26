import { StateNode } from 'tldraw'

// Check out the custom tool example for a more detailed explanation of the tool class.

const OFFSET = 12
export class StickerTool extends StateNode {
	static id = 'sticker'

	onEnter() {
		this.editor.setCursor({ type: 'cross', rotation: 0 })
	}

	onPointerDown() {
		const { currentPagePoint } = this.editor.inputs
		this.editor.createShape({
			type: 'text',
			x: currentPagePoint.x - OFFSET,
			y: currentPagePoint.y - OFFSET,
			props: { text: '❤️' },
		})
	}
}
