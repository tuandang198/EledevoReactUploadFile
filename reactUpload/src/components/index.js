import React, { Component } from 'react';

class index extends Component {
	state = {
		arrImagePreview: [],
		file: []
	}
	handleFileChange(fileInput) {
		this.setState({file: fileInput})
		const arrImg=[]
		for(let i = 0; i < fileInput.length; i++){
			const objectUrl = URL.createObjectURL(fileInput[i])
			arrImg.push(objectUrl)
		}
		console.log(arrImg,'kkk');
		this.setState({arrImagePreview: arrImg})

	}
	handleUploadBtn(){
		const form = new FormData();
		for(let i = 0; i < this.state.file.length;i++){
			form.append("img", this.state.file[i])
		}
		this.props.addStudent({form: form})
	}
	handleUpdate(id){
		const form = new FormData();
		for(let i = 0; i < this.state.file.length;i++){
			form.append("img", this.state.file[i])
		}
		this.props.updateStudent({form: form,studentId: id})
	}
	render() {
		let listData = []
		if (this.props.student) {
			listData = this.props.student.map((value, index) => {
				return (
					<tr key={index}>
						<th>{index + 1}</th>
						<th>
							{value.image.map((value, index) => {
								return (
									<img src={value} key={index} width={100} alt={""}></img>
								)
							})}
						</th>
						<th><button onClick={() => this.props.deleteStudent({ studentId: value._id })}>Delete</button></th>
						<th><button onClick={() => this.handleUpdate(value._id)}>Update</button></th>

					</tr>
				)
			})
		}
		return (
			<div>
				<div>
					<input
					type="file"
					multiple
					onChange={(e) => this.handleFileChange(e.target.files)}
					></input>
					<button
					onClick={() => this.handleUploadBtn()}
					>Upload</button>
					<div>
					{
						this.state.arrImagePreview ?
						this.state.arrImagePreview.map((value, index)=>{
							return(
								<img key={index} src={value} width={100} alt={""}></img>
							)
						}):null
					}</div>
					++++++++++++++++++++++++++
				</div>
				<table>
					<tbody>
						{listData}
					</tbody>
				</table>
			</div>
		);
	}
}

export default index;