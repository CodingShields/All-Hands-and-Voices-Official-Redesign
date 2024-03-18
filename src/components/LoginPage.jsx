import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
const LoginPage = ({ setAdminAccess }) => {
	const user = UserAuth();
	const { signIn } = UserAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		initialLoad: false,
	});

	const initializeState = () => {
		setEmail("");
		setPassword("");
		setState({
			error: false,
			errorMessage: "",
			loading: false,
			initialLoad: true,
		});
	};

	useEffect(() => {
		initializeState();
		setState({
			initialLoad: true,
		});
		setTimeout(() => {
			setState({
				initialLoad: false,
			});
		}, 5000);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setState({
			error: false,
			errorMessage: "",
			loading: true,
		});
		try {
			await signIn(email, password);
			if (user) {
				console.log("success");
				setAdminAccess(true);
			}
		} catch (error) {
			if (error) {
				setState({
					error: true,
					errorMessage: error.code,
				});
				console.log(error.code, "error code");
				errorTimeOut();
			}
		}
	};

	const errorTimeOut = () => {
		setTimeout(() => {
			setState({
				error: false,
				errorMessage: "",
			});
		}, 3000);
	};

	return (
		<div className='w-full h-fit flex flex-col justify-start items-center bg-gray-300 p-2 mx-auto py-6'>
			{/* {state.error ? <ErrorModal errorMessage={state.errorMessage} /> : null}
			{state.loading ? <WorkingModal /> : null} */}
			{/* Loading + Rotating Logo */}

			<div className='bg-black px-8 py-10 rounded-2xl shadow-black shadow-2xl border-4 text-white border-gold-500 bg-opacity-70'>
				<h2 className='text-center text-2xl font-bold tracking-tight text-white'>Please Sign In</h2>

				<form onSubmit={handleSubmit} className='space-y-6 text-md text-white'>
					<div>
						<label htmlFor='email' className='block text-sm font-medium leading-6 '>
							Email address
						</label>
						<div className='mt-2'>
							<input
								onChange={(e) => setEmail(e.target.value)}
								value={state.email}
								name='email'
								type='email'
								autoComplete='email'
								required
								className='block w-full rounded-md border-0 py-1.5 bg-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gold-100 focus:ring-2 focus:ring-offset focus:ring-gold-500 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div>
						<label htmlFor='password' className='block text-sm  leading-6 '>
							Password
						</label>
						<div className='mt-2'>
							<input
								onChange={(e) => setPassword(e.target.value)}
								value={state.password}
								name='password'
								type='password'
								autoComplete='current-password'
								required
								className='block w-full rounded-md border-0 py-1.5 bg-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gold-100 focus:ring-2 focus:ring-offset focus:ring-gold-500 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div className='flex flex-row w-full h-fit space-x-4'>
						<div className='flex items-center justify-start '>
							<input name='remember-me' type='checkbox' className='h-4 w-4 rounded border-gray-300 text-gold-500 focus:ring-gold-500' />
							<label htmlFor='remember-me' className='ml-2 text-sm leading-6 '>
								Remember me
							</label>
						</div>

						<div className='text-xs leading-6'>
							<a href='#'>Forgot password?</a>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='flex w-full justify-center rounded-md bg-hvblue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
