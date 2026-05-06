import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './globals.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FormStandard } from './pages/FormStandard/FormStandard.tsx';
import { FormReact19 } from './pages/FormReact19/FormReact19.tsx';
import { FormRHF } from './pages/FormRHF/FormRHF.tsx';
import Home from './pages/Home.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/form-standard', element: <FormStandard /> },
			{ path: '/form-react-19', element: <FormReact19 /> },
			{ path: '/form-react-hook-form', element: <FormRHF /> }
		]
	}
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
