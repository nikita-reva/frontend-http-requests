const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')
const demo = document.querySelector('ul.list')

let count = 0

const getData = () => {
	axios.get('https://reqres.in/api/users').then((response) => {
		console.log(response)
		const data = response.data

		let node = document.createElement('li')
		node.appendChild(document.createTextNode(data.data[count]['email']))
		demo.appendChild(node)

		if (count < 5) {
			count++
		} else {
			count = 0
		}
	})
}

const sendData = () => {
	axios
		.post(
			'https://reqres.in/api/register',
			{
				email: 'eve.holt@reqres.in',
				// password: 'pistol',
			}
			// Headers can be overriden
			// ,
			// {
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// }
		)
		.then((responseData) => {
			console.log(responseData)
		})
		.catch((err) => {
			console.log(err, err.response)
		})
}

getBtn.addEventListener('click', getData)
postBtn.addEventListener('click', sendData)
