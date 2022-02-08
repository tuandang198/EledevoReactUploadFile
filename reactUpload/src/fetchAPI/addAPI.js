export default function postApi(data){
    return new Promise((resolve, reject) => {
		console.log(data,"api dataaaaaaaaaaaaa");
        const url = 'http://localhost:3004/student';
        fetch(url, { 
            method: 'POST',
            body: data.form
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res)
        })
        .catch((error) =>{
            reject(error);
        })
    })
    }