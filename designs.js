

// const row = $('#input_height').val();
// const column = $('#input_width').val();
// const color = $('#colorPicker').val();

// var createRow = $('<tr></tr>');
// var createColumn = $('<td></td>');

// // Select color input
// // Select size input

// // When size is submitted by the user, call makeGrid()

// function makeGrid() {
	
// 		for (var i = 0; i < row; i++ ) {
// 			$('table').append(createRow);
// 			for (var x = 0; x < column; x++) {
// 			$('tr').append(createColumn);
// 			}
// 		}
// }	



// Your code goes here!

// function makeGrid() {
// 	let row = $('#input_height').val();
// 	let column = $('#input_width').val(); 

// 	$('#pixel_canvas').append(function (){
// 		let newHtml = '';
// 		for (let i = 0; i < row; i++ ) {
// 			newHtml += '<tr>';
// 			let j = 0;
// 				while (j < column) {
// 					newHtml += '<td></td>';
// 					j++;
// 				}
// 			newHtml += '</tr>';
// 		}
// 		return newHtml;
// 	});
// };

// $('button').on('click', (function (e) {
// 	e.preventDefault();
// 	$('#pixel_canvas').empty();
// 	makeGrid();
// });
	function makeGrid() {

		let row = $('#input_height').val();
		let col = $('#input_width').val();

		$('#pixel_canvas').append(function() {
			let newHtml = '';
			for(let i = 0; i < row; i++){
				newHtml += '<tr>';
				let j = 0;
					while(j < col){
						newHtml += '<td></td>';
						j++;
					}
				newHtml += '</tr>';
			}
			return newHtml;
		});
	};

	// button event to create new grid
	$('#submit-btn').on('click', function(e) {
		e.preventDefault();
		$('#pixel_canvas').empty();
		makeGrid();
	});

	// click event to add colour to grid elements
	$('#pixel_canvas').on('click', 'td', function() {
		let color = $('input#color_picker').val();
		$(this).css({ 'background-color': color });
	});	
  
  // click event to remove colour from grid element
	$('#pixel_canvas').on('contextmenu', 'td', function(e) {
		e.preventDefault();
		$(this).removeAttr('style');
	});

