import './App.css';
import 'tldraw/tldraw.css'
import { DefaultKeyboardShortcutsDialog, DefaultKeyboardShortcutsDialogContent, DefaultToolbar, DefaultToolbarContent, Tldraw, TldrawUiMenuItem, useIsToolSelected, useTools } from 'tldraw';
import { useSyncDemo } from '@tldraw/sync';
import { StickerTool } from './StampTool';

const uiOverrides = {
	tools(editor, tools) {
		// Create a tool item in the ui's context.
		tools.sticker = {
			id: 'sticker',
			icon: 'heart-icon',
			label: 'sticker',
			kbd: 's',
			onSelect: () => {
				editor.setCurrentTool('sticker')
			},
		}
		return tools
	},
}

// [2]
const components = {
	Toolbar: (props) => {
		const tools = useTools()
		const isStickerSelected = useIsToolSelected(tools['sticker'])
		return (
			<DefaultToolbar {...props}>
				<TldrawUiMenuItem {...tools['sticker']} isSelected={isStickerSelected} />
				<DefaultToolbarContent />
			</DefaultToolbar>
		)
	},
	KeyboardShortcutsDialog: (props) => {
		const tools = useTools()
		return (
			<DefaultKeyboardShortcutsDialog {...props}>
				<DefaultKeyboardShortcutsDialogContent />
				{/* Ideally, we'd interleave this into the tools group */}
				<TldrawUiMenuItem {...tools['sticker']} />
			</DefaultKeyboardShortcutsDialog>
		)
	},
}

// [3]
export const customAssetUrls = {
	icons: {
		'heart-icon': '/heart-431.svg',
	},
}

// [4]
const customTools = [StickerTool]

function App() {
  console.log("render");
  const { store } = useSyncDemo({ roomId: "1231234345345" });
  return (
    <>
      <div className="tldraw__editor" style={{ position: "fixed", inset: 0 }}>
        <Tldraw 
          components={components}
          tools={customTools}
          overrides={uiOverrides}
          assetsUrls={customAssetUrls}
          initialState='sticker'
		  store={store}
        />
      </div>
    </>
  );
}

export default App;
