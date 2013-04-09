function tokenizer (input) {
  var output = [];
  var buffer = '';

  function clearBuffer (buffer) {
    if (buffer != '') {
      output.push(buffer)
      buffer = ''
    }
    return buffer
  }

  for (var i = 0; i < input.length; i++) {
    switch(input[i]) {
      case '(':
        output.push('(')
        break
      case ')':
        buffer = clearBuffer(buffer)
        output.push(')')
        break
      case '\'':
        buffer = clearBuffer(buffer)
        output.push('\'')
        break
      case '"':
        buffer = clearBuffer(buffer)
        output.push('"')
        break
      case ' ':
        buffer = clearBuffer(buffer)
        break
      default:
        buffer = buffer.concat(input[i])
    }
  }
  return output;
}

console.log(tokenizer('(foo bar baz "quux gaarply")'))
