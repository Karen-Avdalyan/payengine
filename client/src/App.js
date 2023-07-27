
import { Layout } from './Components/Layout';
import { AuthProvider } from './Contexts/Auth';
import { Router } from './Router';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Router />
      </Layout>
    </AuthProvider>
  );
}

export default App;
