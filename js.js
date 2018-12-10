function sum(){
		
		var round = document.getElementById('round').value;
		var lysp = parseFloat(round) * 16 * 3.14;  /*need*/
		var diam = document.getElementById('dia').value;
		var dia = parseFloat(diam);
		var fider = dia * 3; /*need*/
		var dina = document.getElementById('dinar').value;
		var dinar = parseFloat(dina);
		var gaug = document.getElementById('gauge').value;
		var gauge = parseFloat(gaug);
		var slr = document.getElementById('sl').value;
		var sl = parseFloat(slr);
		var coun = document.getElementById('count').value;
		var count = parseFloat(coun);
		var maybelyprcntg = fider * lysp * dinar / 900000; /*need*/
		var cottonsp = dia * gauge * 3.14 * sl ;/*need*/
		var sum1 = cottonsp * fider * 0.0059 / count;
		var sum2 = sum1 + maybelyprcntg ;
		var result = maybelyprcntg * 100 / sum2;



		
		if(!isNaN(result)){
			
			document.getElementById('answer').innerHTML="The lycra percentage is = " + result ;

		}
		


}