import { queryClient } from '@/lib/react-query';
import { router } from '@/router';
import { AuthStoreProvider, useAuth, useSession } from '@/store/auth';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import '@/styles/globals.css';
import reportWebVitals from '@/reportWebVitals';
import { ThemeProvider } from '@/providers/theme-provider';

function App() {
  const auth = useAuth();
  const session = useSession();

  return <RouterProvider router={router} context={{ auth, session }} />;
}

const rootElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <AuthStoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthStoreProvider>
    </QueryClientProvider>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
