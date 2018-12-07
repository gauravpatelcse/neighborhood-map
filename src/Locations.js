const CLIENT_ID = "IOOHSUG00FL3VH4LTNCVA05O5L0ZND1PQUQUAZSPGMJTF4Q1";
const CLIENT_SECRET = "MGEPHJAFU1GYP5ICPLGPBPJ5YISQICFFKLBYSO1VTRQM30TU";

 export const getLocations = () => 
	fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&near=patna&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20181230`)
		.then(resp => resp.json())
		.then(result => result.response.groups[0].items)
		.catch(error => {alert("Error loading page...")})

