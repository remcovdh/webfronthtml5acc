
angular.module('nootje')
	.controller('ProductieSchemaController', [ '$scope', function ($scope) {

	var productieschema = [];

	function getProductieschema() {return productieschema}
	function setProductieschema(convertedProductieSchema) {
		productieschema = convertedProductieSchema;
	}

	$scope.productieschema = getProductieschema();

	$scope.convertBestelling2ProductieSchema = function() {

		deBestellingen = $scope.getBestellingen();

		// TODO Conversie regels, voor nu even maken we een regel aan per bestelregel
		//			maar kan je zo gek maken als maar gewenst!

		hetProductieSchema = []
		var teller = 0;
	
		_.each(deBestellingen, function() {
			teller = teller + 1;
			hetProductieSchema.push({nr: teller}
			)});

		setProductieschema(hetProductieSchema)
		ProductieSchemaController($scope);
	}

}]);