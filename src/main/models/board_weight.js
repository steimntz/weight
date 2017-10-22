function BoardWeight() {
	this.weight = [];
	this.total  = 0;
	this.addWeight = function(card) {
		var weightCardRegex = /\[(\d+)\]/;
		var matches = card.match(weightCardRegex);
		var title = card.replace(weightCardRegex, "").trim();
		if(matches)
			weight = matches[1];
		else
			weight = 0;
		
		this.weight.push(parseInt(weight));
		this.total += parseInt(weight);
		return { weight, title };
	}
}

