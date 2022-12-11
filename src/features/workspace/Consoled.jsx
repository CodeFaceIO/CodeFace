import React, { Component } from 'react';

class Consoled extends Component {
	constructor(props) {
		super(props);
	}

	run() {
		let result = []
		let { consoleLog, value, error, onSuccess, onError } = this.props;

		let code = this.props.children;

		let log = function() {
			let row = [].join.call(arguments, " ");
			result = [...result, consoleLog(row, result.length)];
		}

		try {
			var toEval = code.replace(new RegExp('console.log', 'g'), 'log');
			var evaled = eval(toEval);

			if (typeof evaled == 'object') {
				evaled = JSON.stringify(evaled, null, 2);
			}
			
			if(evaled){
				result = [...result, value(evaled)];		
			}

			onSuccess(evaled);
		} catch(err) {
			if(code){
				result = [...result, error(err)];

				onError(err);
			}
		}

		return result;
	}
	
	render() {
		return this.props.container(this.run())
	}
}

Consoled.defaultProps = {
	container: (result) => <div className="consoled">{result}</div>,
	consoleLog: (row, i) => <div key={i} className="log">{row}</div>,
	value: (row) => <div key="value" className="value">{row}</div>,
	error: (err) => <div key="error" className="error">{err.name}: {err.message}</div>,
	onSuccess: () => {},
	onError: () => {}
};

export default Consoled
