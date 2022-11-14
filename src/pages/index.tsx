import axios from 'axios';
import { GetServerSideProps } from 'next';

export default function Home() {
	return (
		<>
			<div>Home</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const options = {
		method: 'GET',
		url: '',
		headers: {},
	};

	const response = await axios.get('https://api.mangadex.org/manga');

	return {
		props: {},
	};
};
