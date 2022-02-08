import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentComponent from '../components/index'
import * as actions from '../actions/index'
function mapStateToProps(state) {
	return {
		student: state.studentReducer.listStudent
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getStudent : (payload) => {
			dispatch(actions.getStudentRequest(payload));
		},
		addStudent : (payload) => {
			dispatch(actions.addStudentRequest(payload));
		},
		deleteStudent : (payload) => {
			dispatch(actions.deleteStudentRequest(payload));
		},
		updateStudent : (payload) => {
			dispatch(actions.updateStudentRequest(payload));
		}
	};
}

class container extends Component {
	componentDidMount() {
		this.props.getStudent()
	}
	render() {
		return (
			<div>
				<StudentComponent {...this.props}/>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,mapDispatchToProps
)(container);