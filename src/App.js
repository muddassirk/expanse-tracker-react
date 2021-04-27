import './App.css';
import Child from './Child';
import {TransactionProvider} from './GlobalContext'

function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;
