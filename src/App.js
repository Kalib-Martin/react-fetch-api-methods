import Swr from './components/Swr';
import JavascriptFetch from './components/JavascriptFetch';
import ReactQuery from './components/ReactQuery';
import AxiosFetch from './components/AxiosFetch';
import UseFetch from './components/FetchHook';

function App() {
  return (
    <div>
      <UseFetch />
      <AxiosFetch />
      <ReactQuery />
      <JavascriptFetch />
      <Swr />
    </div>
  );
}

export default App;
