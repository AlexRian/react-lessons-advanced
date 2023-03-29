import UseCallbackExample from './components/hooks/UseCallbackExample'
import UseDebugValueExample from './components/hooks/UseDebugValueExample'
import UseTransitionExample from './components/hooks/UseTransitionExample'
import UseImperativeHandleExample from './components/hooks/UseImperativeHandleExample'
import UseLayoutEffectExample from './components/hooks/UseLayoutEffectExample'
import UserDeferredValueExample from './components/hooks/UseDeferredValueExample'
import UseIdExample from './components/hooks/UseIdExample'
import PortalsExample from './components/PortalsExample'
import FormExample from './components/FormExample'
import PropsInheritanceExample from './components/PropsInheritanceExample'

function App() {
  return (
    <div className="App">
      <UseCallbackExample />
      <UseImperativeHandleExample />
      <UseLayoutEffectExample />
      <UseDebugValueExample />
      <UseTransitionExample />
      <UserDeferredValueExample />
      <UseIdExample />
      <PortalsExample />
      <FormExample />
      <PropsInheritanceExample />
    </div>
  )
}

export default App
