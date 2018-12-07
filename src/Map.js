import React from 'react';

class Map extends React.Component {
	markers = [];
	
	addMarkers = locations => {
		if (window.google) {
			let infowindow = new window.google.maps.InfoWindow();
			for (let i = 0; i < locations.length; i++) {
			let marker = new window.google.maps.Marker({
				position: {
					lat: locations[i].venue.location.lat, 
					lng: locations[i].venue.location.lng
					}, 
					map: window.mapObject,
					title: locations[i].venue.id
				});
				marker.addListener("click", () => {
					let content = this.props.prepareContent(locations[i]);
					infowindow.setContent(content);
          			infowindow.open(window.mapObject, marker);
					marker.setAnimation(window.google.maps.Animation.BOUNCE); 
					setTimeout(() => {marker.setAnimation(null) }, 1500);
        		});
        		
				this.markers.push(marker);	
			}
			window.infowindow = infowindow;
			window.markers = this.markers;
		}
	};
	
	removeMapMarkers = () => {
		for (let i = 0; i < this.markers.length; i++) {
			this.markers[i].setMap(null);
		}
	}
	
	render () {

		this.removeMapMarkers();
		this.addMarkers(this.props.locations);
		return <section id="map"/>;
	}
}

export default Map;