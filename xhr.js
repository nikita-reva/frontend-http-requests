const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')

const sendHttpRequest = (method, url, data) => {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open(method, url)
		// If responseType is set to 'json' parsing will be done automatically
		xhr.responseType = 'json'
		// Add a header to the request
		if (data) {
			xhr.setRequestHeader('content-type', 'application/json')
		}
		// Examine the status code and return an error if the status code is greater than or equal to 400
		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response)
			} else {
				resolve(xhr.response)
			}
		}
		// Return an error if the request failed
		xhr.onerror = () => {
			reject('Something went wrong!')
		}

		xhr.send(JSON.stringify(data))
	})
	return promise
}

const getData = () => {
	sendHttpRequest('GET', 'https://reqres.in/api/users').then(
		(responseData) => {
			console.log(responseData)
		}
	)
}

const sendData = () => {
	sendHttpRequest('POST', 'https://reqres.in/api/register', {
		email: 'eve.holt@reqres.in',
		password: 'pistol',
	})
		.then((responseData) => {
			console.log(responseData)
		})
		.catch((err) => {
			console.log(err)
		})
}

getBtn.addEventListener('click', getData)
postBtn.addEventListener('click', sendData)
