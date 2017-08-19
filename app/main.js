'use strict'

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDom from 'react-dom';
import CommentBox from './comment/CommentBox';



ReactDom.render(
	<CommentBox url="app/data.json"/>,
	document.getElementById('app')
);
export default {};