//inserted by bob to get url parameter
function gup( name ) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return null;
  else
    return results[1];
}

function score() {
	if ( typeof score.counter == 'undefined' ) {
             // It has not... perform the initialization
             score.counter = 0;
        } else {
		score.counter = score.counter + 1;
	}
     return score.counter;		
}

function add_list() {
	if ( typeof found_words_list == 'undefined' ) {
             // It has not... perform the initialization
             found_words_list = [];
        } else {
		found_words_list = found_words_list.concat(words[0]);
	}
     return found_words_list;		
}

	