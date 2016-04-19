var main = function() {
	"use strict";

	var toDos = [
		"Finish writing this book",
		"Take Gracie to the park",
		"Answer emails",
		"Prep for Monday's class",
		"Make up some new ToDos",
		"Get Groceries"
	];

	$(".tabs a span").toArray().forEach(function(element) {
		// create a click handler for this element
		$(element).on("click", function() {
			// since we're using the jQuery version of element
			// we'll go ahead and create a temporary variable
			// so we don't need to keep recreating it
			var $element = $(element), $content;

			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();

			if ($element.parent().is(":nth-child(1)")) {
				$content = $("<ul>");
				for (var i = toDos.length - 1; i >= 0; i--) {
					$content.append($("<li>").text(toDos[i]));
				}
				$("main .content").append($content);
			}
			else if ($element.parent().is(":nth-child(2)")) {
				$content = $("<ul>");
				toDos.forEach(function(todo) {
					$content.append($("<li>").text(todo));
				});
				$("main .content").append($content);
			}
			else if ($element.parent().is(":nth-child(3)")) {
				
				var $input = $('<input type="text">');
				
				var $button = $("<button>+</button>");
				$button.text = "enter";

				$button.on("click", function() {
					toDos.push($input.val());
					$input.val("");
				});
				
				$("main .content").append($input).append($button);
			}

			return false;
		});
	});
};

$(document).ready(main);