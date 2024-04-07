import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, updateDoc } from "firebase/firestore";

const AdminUpdateAboutBoard = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: true,
		homeData: [],
	});

	const [data, setData] = useState([]);

	const [updateData, setUpdateData] = useState({
		sectionOne: [],
		sectionTwo: [],
		sectionThree: [],
	});

	useEffect(() => {
		setState({
			loading: true,
			error: true,
			errorMessage: "Loading Page",
		});
		const fetchData = async () => {
			const db = getFirestore();
			console.log(db);
			await getDocs(collection(db, "update-pages")).then((snapshot) => {
				const pageData = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setData(pageData[1]);
				setState({ loading: false, error: false, errorMessage: "" });
			});
		};
		console.log(data);

		fetchData();
	}, []);

	const handleDataUpdate = async (e) => {
		setState({
			loading: true,
			error: true,
			errorMessage: "Loading Page",
		});
		const db = getFirestore();
		await updateDoc(doc(db, "update-pages", "home"), {
			sectionOne: [updateData.sectionOne[0]],
			sectionTwo: [updateData.sectionTwo[0]],
			sectionThree: [updateData.sectionThree[0]],
		});
	};

	return (
		<div className='h-full w-full mx-auto flex flex-col justify-center items-center'>
			<div className='w-full h-fit text-center'>
				<h1 className='text-center text-lg '>Admin Update Home</h1>
				<h1>Current Home Page</h1>
			</div>
			<div className='flex flex-row w-3/4 justify-center gap-12'>
				<div>
					<div className='grid grid-cols-1'>
						<div className='grid grid-cols-2 p-4 w-full group hover:border-2 hover:border-hvorange'>
							<div>
								<p className='group-hover:text-hvorange-500 text-lg underline font-bold'>Section 1-0</p>
								{!state.loading ? <p className='group-hover:text-hvorange-500 00 py-2 text-lg'>{data.sectionOne[0]}</p> : null}
							</div>
							<div>
								<p className='group-hover:text-hvorange-500 text-lg underline font-bold'>Section 1-0</p>
								<textarea
									onChange={() => {
										setUpdateData({ ...updateData, sectionOne: [event.target.value] });
									}}
									value={updateData.sectionOne[0]}
									className='w-full h-auto active:border-hvorange-500 '
								/>
							</div>
						</div>
						<div className='grid grid-cols-2 p-4 w-full group hover:border-2 hover:border-hvorange'>
							<div>
								<p className='group-hover:text-hvorange-500 text-lg underline font-bold'>Section 1-1</p>
								{!state.loading ? <p className='group-hover:text-hvorange-500 00 py-2 text-lg'>{data.sectionOne[1]}</p> : null}
							</div>
							<div>
								<p className='group-hover:text-hvorange-500 text-lg underline font-bold'>Section 1-1</p>
								<textarea className='w-full h-auto active:border-hvorange-500 ' />
							</div>
						</div>
						<div className='grid grid-cols-2 p-4 w-full group hover:border-2 hover:border-hvorange'>
							<div>
								<p className='group-hover:text-hvorange-500 text-lg underline font-bold'>Section 1-2</p>
								{!state.loading ? <p className='group-hover:text-hvorange-500 00 py-2 text-lg'>{data.sectionOne[2]}</p> : null}
							</div>
							<div>
								<p className='group-hover:text-hvorange-500 text-lg underline font-bold'>Section 1-2</p>
								<textarea className='w-full h-auto active:border-hvorange-500 ' />
							</div>
						</div>
						<div className='grid grid-cols-2 p-4 w-full group hover:border-2 hover:border-hvorange'>
							<div>
								<p className='group-hover:text-hvorange-500 text-lg underline font-bold'>Section 2-0</p>
								{!state.loading ? <p className='group-hover:text-hvorange-500 00 py-2 text-lg'>{data.sectionTwo[0]}</p> : null}
							</div>
							<div>
								<p className='group-hover:text-hvorange-500 text-lg underline font-bold'>Section 2-0</p>
								<textarea className='w-full h-auto active:border-hvorange-500 ' />
							</div>
						</div>
						<div className='grid grid-cols-2 p-4 w-full group hover:border-2 hover:border-hvorange'>
							<div>
								<p className='group-hover:text-hvorange-500 text-lg underline font-bold'>Section 2-1</p>
								{!state.loading ? <p className='group-hover:text-hvorange-500 00 py-2 text-lg'>{data.sectionTwo[1]}</p> : null}
							</div>
							<div>
								<p className='group-hover:text-hvorange-500 text-lg underline font-bold'>Section 2-1</p>
								<textarea className='w-full h-auto active:border-hvorange-500 ' />
							</div>
						</div>
						<div className='grid grid-cols-2 p-4 w-full group hover:border-2 hover:border-hvorange'>
							<div>
								<p className='group-hover:text-hvorange-500 text-lg underline font-bold'>Section 2-2</p>
								{!state.loading ? <p className='group-hover:text-hvorange-500 00 py-2 text-lg'>{data.sectionTwo[2]}</p> : null}
							</div>
							<div>
								<p className='group-hover:text-hvorange-500 text-lg underline font-bold'>Section 2-2</p>
								<textarea className='w-full h-auto active:border-hvorange-500 ' />
							</div>
						</div>
						<div className='grid grid-cols-2 p-4 w-full group hover:border-2 hover:border-hvorange'>
							<div>
								<p className='group-hover:text-hvorange-500 text-lg underline font-bold'>Section 3-0</p>
								{!state.loading ? <p className='group-hover:text-hvorange-500 00 py-2 text-lg'>{data.sectionThree[0]}</p> : null}
							</div>
							<div>
								<p className='group-hover:text-hvorange-500 text-lg underline font-bold'>Section 3-0</p>
								<textarea className='w-full h-auto active:border-hvorange-500 ' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='py-4'>
				<button
					onClick={handleDataUpdate}
					className='bg-hvorange hover:bg-hvorange-700 text-white font-bold py-2 px-4 rounded shadow-lg shadow-black active:translate-y-2 duration-100 ease-in-out transition-all'
				>
					Update Data
				</button>
			</div>
		</div>
	);
};

export default AdminUpdateAboutBoard;
