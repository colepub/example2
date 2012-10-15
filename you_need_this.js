function GenerateColorTag (str) {
  return '<div style="color: #' + Math.floor(Math.random()*16777215).toString(16) + '">' + str + '</div>';
}