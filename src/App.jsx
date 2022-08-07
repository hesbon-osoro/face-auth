import { useEffect } from 'react';
import './App.css';

function App() {
	let faceio;

	useEffect(() => {
		faceio = new faceIO('fioa4303');
	}, []);

	const handleSignIn = async () => {
		try {
			let response = await faceio.enroll({
				locale: 'auto',
				payload: {
					email: 'example@example.com',
					pin: '12345',
				},
			});
			console.log(`Unique Facial ID: ${response.facialId}
			Enrollment Date: ${response.timestamp}
			Gender: ${reponse.details.gender}
			Age Approximation: ${reponse.details.age}`);
		} catch (err) {
			console.log(err);
		}
	};

	const handleLogin = async () => {
		try {
			let response = await faceio.authenticate({ locale: 'auto' });
			console.log(`Unique Facial ID: ${response.facialId}
			Payload: ${response.payload}
			`);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<section>
			<h1>Face Authentication by FaceIO</h1>
			<button onClick={handleSignIn}>Sign-in</button>
			<button onClick={handleLogin}>Log-in</button>
		</section>
	);
}

export default App;
