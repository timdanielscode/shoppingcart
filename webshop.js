// Tim Daniels 97044742

// de functie webBasket
function webBasket() {
	
	// namen oproepen vanuit de form
	this.getNamen = function(form) {
		i = form.elements.length;
		namen = [];
		for(x=0; x<i; x++) {
			namen.push(form.elements[x].name);
		}
		return namen;
	};
	
	// waardes oproepen vanuit de form
    this.getValues = function(form) {
		i = form.elements.length;
		values = [];
		for(x=0; x<i; x++) {
			values.push(form.elements[x].value);
		}
		return values;
	};

	// product opslaan in de localStorage 
    this.addItem = function(form) {
		namen = this.getNamen(form);
		values = this.getValues(form);
		item = [];
		item = '<tr><td>'+values[0]+'</td>'+'<td>'+values[1]+'</td>' + 
			'<td>'+values[2]+'</td>'+'<td>'+values[3]+'</td>' + 
			'<td>'+values[4]+'</td><td><a href="javascript:basket.deleteItem(location.reload())"><img src="images/container.png" width="20"></a></td></tr>';
		localStorage.setItem(values[0], item);
	};
	
	// om een product uit het winkelmandje te verwijderen uit de localStorage
	this.deleteItem = function(key) {
		
		var x = localStorage.key(key);
		localStorage.removeItem(localStorage.key(0));
		
	}
	
	// om ieder product uit het winkelmandje te verwijderen uit de localStorage
	this.emptyBasket = function() {
		localStorage.clear();
	};
	
	// om de producten op te vragen uit de localStorage in een tabel
	this.showBasket = function(form) {
		if (localStorage.getItem(localStorage.key(i)) !== null) {
			var output = document.getElementById("output");
			output.innerHTML = "<tr><th>id</th><th>product</th><th>model</th><th>prijs</th><th>aantal</th><th><a href='javascript:basket.emptyBasket(location.reload())'><span class='kruisje'>X</span></a></th></tr>";
			for (var i = 0; i < localStorage.length; i++){
				output.innerHTML += localStorage.getItem(localStorage.key(i));
			}
		} else {
			alert("Winkelmand is leeg.");
		}
	}	
}
	// de functie oproepen
	var basket = new webBasket();

			
			
			
			
			
			
			
			
			
			
			
			
			