var config = { childList: true };

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
		var boards = mutation.target.querySelectorAll(".board-list");
		if(boards)
			[].forEach.call(boards, function(board) {
				var boardContext = new BoardWeight();
				var cards = board.querySelectorAll("a.js-no-trigger");
				[].forEach.call(cards, function(card) {
					addToBoard(card, boardContext);
				});
				board.dataset.weight = boardContext.total;
			});
	});
});

function addToBoard(card, boardContext) {
	var title  = card.getAttribute("title");
	var titleWeight = boardContext.addWeight(title);
	card.dataset.weight = titleWeight.weight;
	console.log(titleWeight);
	card.innerHTML = titleWeight.title;
	console.log(titleWeight);
}

observer.observe(document.querySelector("html"), config);
