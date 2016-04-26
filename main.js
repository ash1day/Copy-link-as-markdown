main()

function main() {
  var title = getTitle()
  var url = window.location.href
  var text = '[' + title + '](' + url + ')'

  saveToClipboard(text)
  notify('Copied! ' + text)
}

function getTitle(){
  var title = $('title').text()
  var spChars = { '[': '(', ']': ')' }
  var escapedTitle = title.replace(/[\[\]]/g, function(c) { return spChars[c] })

  var pipeIndex = escapedTitle.indexOf('|')
  if (pipeIndex != -1) escapedTitle = escapedTitle.substr(0, pipeIndex)

  var escapedTitle = escapedTitle.trim()

  return escapedTitle
}

function saveToClipboard(text) {
  var textArea = document.createElement('textarea')
  textArea.style.cssText = 'position:absoluteleft:-100%'

  document.body.appendChild(textArea)

  textArea.value = text
  textArea.select()
  document.execCommand('copy')

  document.body.removeChild(textArea)
}

function notify(text) {
  var container = $('<div #msg_container>' + text + '</div>')

  var sclTop  = document.body.scrollTop  || document.documentElement.scrollTop
  var top = Math.floor(($(window).height() - container.height()) / 2) + parseInt(sclTop)

  container.css({
    'color': 'white',
    'background': '#018865',
    'text-align': 'center',
    'line-height': '3em',
    'font-weight': 'bold',
    'padding': '0.5em',
    'position': 'absolute',
    'top': top,
    'width': '100%',
    'z-index': '2147483647'
  }).hide()

  $('body').append(container)

  container.fadeIn(300)
  container.fadeOut(3000)
}