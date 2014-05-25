YUI({ logInclude: { TestRunner: true } }).use('test', 'test-console', function(Y) {

 	var testCase1 = new Y.Test.Case( {
		name: 'Sum Test', 
		testSumSimple: function () {
			Y.Assert.areSame(
				sum(2, 2), 
				4, 
				'2 + 2 does not equal 4?');
	}});

	// var testCase2 = new Y.Test.Case( 
	// 	{testValidateEmptyString: function () {	
	// 		Y.Assert.areSame(
	// 			validatelog(""),
	// 			false,
	// 			'empty string seems to be a valid log?'
	// 		);
	// }}); 
	// 
	// var testCase3 = new Y.Test.Case( 
	// 	{testValidateLongString: function () {	
	// 		Y.Assert.areSame(
	// 			validatelog("Vandaag etappe drie van wandeling d'Anivers gedaan"), 
	// 			true, 
	// 			'valid log wordt blijkbaar afgekeurd?'
	// 		);
	// }}); 
	// 		
	//   var testCase4 = new Y.Test.Case( {testValidateEdgeString:  function () {
	// 	Y.Assert.areSame(
	// 		validatelog("OK!"), 
	// 		true, 
	// 		'valide log wordt blijkbaar afgekeurd?'
	// 	);
	// }}); 
	
 // Load it up
 Y.Test.Runner.add(testCase1);
 // Y.Test.Runner.add(testCase2);
 // Y.Test.Runner.add(testCase3);
 // Y.Test.Runner.add(testCase4);
 
 (new Y.Test.Console({ newestOnTop: false })).render('#log');
 // Run it
 Y.Test.Runner.run();
});