export default function updateAPI(data){
    return new Promise((resolve, reject) => {
		const url = `http://localhost:3004/student/${data.studentId}`;
		
        fetch(url, { 
            method: 'PUT',
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