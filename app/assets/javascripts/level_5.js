function lvl5(params) {
  var paragraphs = $('p');
  var len = paragraphs.length;

  console.log('There are ' + len + ' paragraphs on this page');

  $(paragraphs).last().css('color', 'red');

  var mid = $('#mid');

  mid.html("I'm the captain now.");

  paragraphs.css('font-size', '10px');

  $('#capitalize').css('text-transform', 'uppercase');
  $('#italicize').css('fontStyle', 'italic');
  $('#bold').css('fontWeight', 'bold');
};

// $(lvl5);
