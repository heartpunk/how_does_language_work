function tokenizer (input) {
  var output = []
  var buffer = ''
  var steps = []

  function clear_buffer () {
    if (buffer != '') {
      output.push(buffer)
      buffer = ''
    }
  }

  for (var i = 0; i < input.length; i++) {
    // this is a start.  would probably be better to both accumulate the steps, and have a callback.
    steps.push({
      'output' : output.slice(0),
      'buffer' : buffer,
    })
    switch(input[i]) {
      case '(':
        output.push('(')
        break
      case ')':
        clear_buffer(buffer)
        output.push(')')
        break
      case '\'':
        clear_buffer(buffer)
        output.push('\'')
        break
      case '"':
        clear_buffer(buffer)
        output.push('"')
        break
      case ' ':
        clear_buffer(buffer)
        break
      default:
        buffer = buffer.concat(input[i])
    }
  }
  console.log(steps)
  return output
}

console.log(tokenizer('(foo bar baz "quux gaarply")'))
