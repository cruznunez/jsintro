lvl6 = () ->
  paragraphs = $ 'p'
  len = paragraphs.length

  console.log "There are #{len} paragraphs on this page"

  $(paragraphs).last().css 'color', 'red'

  mid = $ '#mid'

  mid.html "I'm the captain now."

  paragraphs.css 'font-size', '10px'

  $('#capitalize').css 'text-transform', 'uppercase'
  $('#italicize').css 'font-style', 'italic'
  $('#bold').css 'font-weight', 'bold'

$ lvl6
