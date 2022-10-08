import { BrowserRouter } from 'react-router-dom';
import PageHeader from './common/PageHeader';
import PageNavigator from './list/PageNavigator';

function App() {
  return (
    <>
      <PageHeader />
      <PageNavigator />
    </>
  );
}

export default App;
