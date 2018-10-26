const axios = require('axios');

export default() => {
	let port = process.env.PORT || 3000;
	let url = `http://localhost:${port}`;
  	return axios.create({
    	baseURL: url,
  });
}