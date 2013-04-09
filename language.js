function tokenizer (input) {
  var output = [];
  var buffer = '';

  function clearBuffer () {
    if (buffer != '') {
      output.push(buffer)
      buffer = ''
    }
  }

  for (var i = 0; i < input.length; i++) {
    // NOTE: in the future we'll need to log each step of tokenizing, parsing, etc. somehow for visualization purposes.
    // This is where some of that will go!  Probably best to add it here first before even building a parser and whatnot.
    switch(input[i]) {
      case '(':
        output.push('(')
        break
      case ')':
        clearBuffer(buffer)
        output.push(')')
        break
      case '\'':
        clearBuffer(buffer)
        output.push('\'')
        break
      case '"':
        clearBuffer(buffer)
        output.push('"')
        break
      case ' ':
        clearBuffer(buffer)
        break
      default:
        buffer = buffer.concat(input[i])
    }
  }
  return output;
}

console.log(tokenizer('(foo bar baz "quux gaarply")'))
