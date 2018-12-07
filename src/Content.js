import React from 'react';
import Map from './Map';
import List from './List';
import * as LocationsAPI from './Locations';



class Content extends React.Component {
	state = {
		locations: [],
		allLocations: [],
		query: ""
	};
	
	componentDidMount() {		
	 	try { LocationsAPI.getLocations()
			 .then((resp) => {
			 this.setState({ locations: resp, allLocations: resp })
		}); 
		} catch (error) {
      		alert("Error loading page...")
    	}
 	}
 	
 	handleClick = (location) => {
 			for (let i = 0; i < window.markers.length; i++) {
 				if (location.venue.id === window.markers[i].title) {
 					let content = this.prepareContent(location);
 					window.infowindow.setContent(content);
 					window.infowindow.open(window.mapObject, window.markers[i]);
 					window.markers[i].setAnimation(window.google.maps.Animation.BOUNCE); 
					setTimeout(() => {window.markers[i].setAnimation(null) }, 1500);	
 			}
 		}
 	}

 
 	prepareContent = location => {
		return `<div tabIndex="0">
					<h3 className="title" tabindex="0">${location.venue.name}</h3>
					<p>${location.venue.location.address}</p>
				</div>`;
	};

	handleTextChange = (query) => {	
		
		this.setState({ query });
		if (query) {
			this.setState({ 
				locations: this.filterLocations(query, this.state.locations)
			})
		} else  {
			this.setState({ locations: this.state.allLocations}) 	
		}
	};

	filterLocations = (query, locations) => {
		return locations.filter(location => location.venue.name.toLowerCase().includes(query.toLowerCase()));

	}

	render () {
		// console.log(this.state.locations);
		
		return (
			<div className="content" role="application" aria-label="map">
				<List 
					locations={this.state.locations} 
					showInfoContent={this.handleClick}
					queryString={this.state.query}
					handleChange={this.handleTextChange}
				/>
				<Map 
					locations={this.state.locations} 
					prepareContent={this.prepareContent} 
				/>
			</div>
		);
	}
}

export default Content;