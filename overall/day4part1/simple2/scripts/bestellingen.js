
angular.module('nootje')
	.controller('BestellingenController', [ '$scope', function ($scope) {

	// vrij willekeurige initialisatie data
	var bestellingen = [
		{nr: 201,
			besteldata: [
				{ bestelregel: 1, type: "luxedoos", aantal: 20},
				{ bestelregel: 2, type: "simple", aantal: 4}
			]
		},
		{nr: 202, 
			besteldata: [
				{ bestelregel: 1, type: "kestversie", aantal: 10},
				{ bestelregel: 2, type: "simple", aantal: 5}
			]
		}
	]
	
	// Aanpassingen ivm http://mutablethought.com/2013/04/25/angular-js-ng-repeat-no-longer-allowing-duplicates/
	function getBestellingen() {
		abestellijst = localStorage["bestellingen"]
		if ((abestellijst !== undefined) && abestellijst.length > 0) {
			console.log("De bestellijst (uit localstorage) => "+abestellijst);
			bestellingen = JSON.parse(abestellijst);
		}
		return bestellingen
	}

	function setBestellingen(nieuwelijstbestellingen) {
		bestellingen = nieuwelijstbestellingen;
		localStorage["bestellingen"] = JSON.stringify(bestellingen);
	}

	$scope.bestellingen= getBestellingen();

	$scope.addBestelling=function(){
		laatstenr = $scope.bestellingen[($scope.bestellingen.length-1)].nr
		$scope.bestellingen.push(
			{nr: (laatstenr+1), 
				besteldata: [
					{ bestelregel: 1, type: "open", aantal: 0},
				]
			}
		);
		// Soort van database store
		setBestellingen($scope.bestellingen);
	}

	$scope.addBestelregel=function(anr) {
		debestelling = _.find($scope.bestellingen, function(bestelling){ return bestelling.nr == anr; });
		debestelling.besteldata.push({ bestelregel: (debestelling.besteldata.length+1), type: "gekkedoos", aantal: 20}); 
		setBestellingen($scope.bestellingen);
	}

}]);