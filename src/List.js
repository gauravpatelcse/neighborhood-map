import React from 'react';


class List extends React.Component {
	state = {
		open: false
	}
	
	render () {

	const locations = this.props.locations;

		return (			
			<nav>
				<h2>Locations</h2>
				<input type="text" placeholder="Filter Locations" value={this.props.queryString} onChange={e => this.props.handleChange(e.target.value)}/>
				<label className="caret" htmlFor="menu-toggle" tabIndex="0" role="menu" aria-haspopup="true"></label>
				<input  type="checkbox" id="menu-toggle"/>
				<ol id="menu" >
					{locations.map(location =>(
						<li key={location.venue.id} aria-label="submenu">
							<div>
								<p className="title">
									<button onClick={() => this.props.showInfoContent(location)}>
										{location.venue.name}
									</button>
								</p>
							</div>
						</li>
					))}
				</ol>
			</nav>
		);
	}
}

export default List;