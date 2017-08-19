'use strict';

import React from 'react';

class commentForm extends React.Component {
	handleSubmit (event) {
		event.preventDefault();
		console.log('提交表单。。。');

		let author = this.refs.author.value,
			text = this.refs.text.value;
		
		this.props.onCommentSubmit({author,text,data:'1分钟前'});
	}
	render() {
		return (
			<form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
				<div className="field">
					<input type="text" placeholder="姓名" ref="author"/>
				</div>
				<div className="field">
					<textarea name="" placeholder="评论" id="" cols="30" rows="10" ref="text"></textarea>
				</div>
				<button type="submit" className="ui blue button">添加评论</button>
			</form>
		);
	}
}

export {commentForm as default}