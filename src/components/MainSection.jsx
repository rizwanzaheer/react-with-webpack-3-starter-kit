import React, { Component } from 'react';

export default class MainSection extends Component {
	componentWillMount() {}

	render() {
			return (
					<section>
						<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
						<br/><br/>
						<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Open modal for @fat</button>
						<br/><br/>
						<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>
						<br/><br/>
						<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
										<h4 className="modal-title" id="exampleModalLabel">New message</h4>
									</div>
									<div className="modal-body">
										<form>
											<div className="form-group">
												<label htmlFor="recipient-name" className="control-label">Recipient:</label>
												<input type="text" className="form-control" id="recipient-name" />
											</div>
											<div className="form-group">
												<label htmlFor="message-text" className="control-label">Message:</label>
												<textarea className="form-control" id="message-text"></textarea>
											</div>
										</form>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
										<button type="button" className="btn btn-primary">Send message</button>
									</div>
								</div>
							</div>
						</div>
					</section>
			)
	}
}