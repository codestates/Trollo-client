import axios, { Method } from 'axios';

const DOMAIN = 'http://8e4d052f7b39.ngrok.io';
axios.defaults.withCredentials = true;

export const axiosRequest = async <D, H>(method: Method, url: string, data?: D, headers?: H): Promise<D | void> => {
	try {
		const res = await axios({
			method,
			url: `${DOMAIN}${url}`,
			data,
			headers,
		});
		return res.data;
	} catch (err) {
		return console.log(err);
	}
};

axiosRequest.defaulProps = {
	data: {},
};
