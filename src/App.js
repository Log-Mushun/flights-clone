import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <HomePage />
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
