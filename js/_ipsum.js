jQuery( document ).ready( function( $ )
{
  var random_word = fisherYates( words ).slice( 0, Math.floor( ( Math.random() + 1 ) ) ).toString().replace( /,/g, ' ' );
  $( '.random-word' ).text( random_word );

  var form            = $( '.ipsum-form' );
  var paragraph_count = $( '.paragraph_count' );
  var results         = $( '.print-paragraphs' );

  paragraph_count.focus();

  form.submit( function()
  {
    var paragraph_number = paragraph_count.val() // Grab the paragraph number the user enters
    ,   paragraphs       = ''
    ,   sentence_number  = 1
    ,   sentence_group   = ''
    ,   sentence_capped  = ''
    ,   words_random
    ,   sentence
    ;

    // Start the first FOR loop that builds sentences from words
    for ( var z = 0; z < paragraph_number; z++ )
    {
      // Randomize number of sentences per paragraph
      sentence_number = 1 + Math.floor( ( Math.random() * 10 ) );

      // Start the second FOR loop that builds sentence groups from sentences
      for ( var y = 0; y < sentence_number; y++ )
      {
        // Create a variable for the randomized array of words
        words_random = fisherYates( words );
        words_random = words_random.slice( 0, Math.floor( ( Math.random() + 1 ) * 3 ) );

        // Convert array to string with no commas or quotes, add period to end
        sentence = words_random.toString().replace( /,/g, ' ' ) + '. ';

        sentence_capped = capitalizeFirstLetter( sentence );
        // End the first FOR loop that builds sentences from words

        sentence_group += sentence_capped;
        // End the second FOR loop that builds sentence groups from sentences
      }

      paragraphs += sentence_group + "\n\n";
      // End the third FOR loop that builds and spaces paragraphs from sentence groups
      sentence_group = '';
    }

    paragraphs = paragraphs.substring( 0, paragraphs.length - 2 ); // Remove last two new-line characters

    results.empty().text( paragraphs );
    if ( false === results.is( ':visible' ) )
    {
        results.fadeIn( '200' );
    }

    results.focus();

    // Prevent form from actually submitting so page does not reload
    return false;
  });

  results.on( 'focus', function( event )
  {
    $( this ).select();
    $( this ).one( 'mouseup', function( event )
    {
      event.preventDefault();
    } );
  } );

});


// Capitalize first letter in string
function capitalizeFirstLetter( string )
{
  return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
}

// Use a function that randomizes the contents of an array
function fisherYates( words )
{
  var i = words.length
    , j
    , tempi
    , tempj
    ;

  if ( i === 0 ) return false;
  while ( --i )
  {
    j          = Math.floor( Math.random() * ( i + 1 ) );
    tempi      = words[ i ];
    tempj      = words[ j ];
    words[ i ] = tempj;
    words[ j ] = tempi;
  }
  return words;
}
