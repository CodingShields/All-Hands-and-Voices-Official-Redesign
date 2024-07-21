import { useState, useEffect } from "react";
import { getFirestore, getDocs, updateDoc, doc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import LoadingModal from "../../../components/LoadingModal";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
const AdminUpdateHome = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		data: [],
		currentEvent: "",
		newEvent: "",
		pastEvents: [],
		newEventSaved: false,
	});

	useEffect(() => {
		const fetchData = async () => {
			setState((prevState) => ({ ...prevState, loading: true }));
			try {
				const snapshot = await getDocs(collection(db, "update-pages"));
				const pageData = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));

				if (pageData.length > 0) {
					const events = pageData[0];
					setState({
						loading: false,
						error: false,
						errorMessage: "",
						currentEvent: events.currentEvent || "There are no current events",
						pastEvents: events.pastEvents || "There are no past events saved",
					});
				} else {
					setState({
						loading: false,
						error: true,
						errorMessage: "No data found",
					});
				}
			} catch (error) {
				console.log(error);
				setState({
					loading: false,
					error: true,
					errorMessage: "Error fetching data",
				});
			}
		};

		fetchData();
	}, []);

	const handleDataUpdate = async (e) => {
		e.preventDefault();
		setState((prevState) => ({ ...prevState, loading: true }));

		try {
			const docRef = doc(db, "update-pages", "events");
			// Update the Firestore document with the new data
			await updateDoc(docRef, {
				currentEvent: state.newEvent,
				pastEvents: [...state.pastEvents, state.currentEvent], // Add currentEvent to pastEvents
			});
			setState((prevState) => ({
				...prevState,
				loading: false,
				error: false,
				errorMessage: "",
				currentEvent: state.newEvent, // Update currentEvent to the new event
				newEvent: "", // Clear newEvent field
				newEventSaved: true,
			}));

			console.log("Event updated successfully");
		} catch (error) {
			setState({
				loading: false,
				error: true,
				errorMessage: "Error Updating Data",
			});
			console.error("Error updating data:", error);
		}
	};

	console.log(state.pastEvents);
	return (
		<div className='h-full w-full mx-auto flex flex-col justify-center items-center'>
			<LoadingModal open={state.loading} />
			<div className='w-full h-fit text-center'>
				<h1 className='text-center text-2xl my-4'>Update Events</h1>
			</div>
			<div className='flex flex-col w-full justify-center items-center space-y-8'>
				<div className='flex flex-row space-x-4'>
					<div className='flex flex-col justify-center items-center border-4 border-hvorange p-4 shadow-2xl shadow-black/50 rounded-2xl w-fit h-fit'>
						<p className='text-xl font-semibold'>Current Event Posted:</p>
						{state.loading ? <p>Loading...</p> : <p>{state.currentEvent}</p>}
						{state.newEventSaved && (
							<p className='animate-bounce inline-flex border-4 border-green-500 px-4 py-2 mt-6 rounded-3xl'>
								<ArrowUpCircleIcon className='w-6 h-6 text-green-500 mr-4' />
								Event Updated
								<ArrowUpCircleIcon className='w-6 h-6 text-green-500 ml-4' />
							</p>
						)}
					</div>
					<div className='block border-4 border-hvorange p-4 shadow-2xl shadow-black/50 rounded-2xl whitespace-wrap w-96'>
						<p className='text-xl font-semibold'>Previous Events:</p>
						{state.loading ? (
							<p>Loading...</p>
						) : (
							<ul className='list-disc list-inside'>
								{state.pastEvents.map((event, index) => (
									<li key={index}>{event}</li>
								))}
							</ul>
						)}
					</div>
				</div>

				<div className='block border-4 border-hvorange w-1/4 p-4 shadow-2xl shadow-black/50 rounded-2xl  '>
					<p>New Event To Post:</p>
					<textarea type='text' className='w-full' value={state.newEvent} onChange={(e) => setState({ ...state, newEvent: e.target.value })} />
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

export default AdminUpdateHome;
