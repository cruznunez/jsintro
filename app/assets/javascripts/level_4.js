function lvl4(params) {
  var paragraphs = document.getElementsByTagName('p');
  var len = paragraphs.length;

  console.log('There are ' + len + ' paragraphs on this page');

  paragraphs[len - 1].style.color = 'red';

  var mid = document.getElementById('mid');

  mid.innerHTML = "I'm the captain now.";

  for (i = 0; i < len; i++) {
    paragraphs[i].style.fontSize = '10px';
  };

  document.getElementById('capitalize').style.textTransform = 'uppercase';
  document.getElementById('italicize').style.fontStyle = 'italic';
  document.getElementById('bold').style.fontWeight = 'bold';
};

// window.onload = lvl4;
