function tokenizer (input) {
  var output = []
  var buffer = ''
  var steps = []

  // since we're not passing buffer in explicitly, it references the one a few lines above.
  // this means we can clear buffer from inside of this function.  yay procedural style!
  function clear_buffer () {
    if (buffer != '') {
      output.push(buffer)
      buffer = ''
    }
  }

  for (var i = 0; i < input.length; i++) {
    // this is a start.  would probably be better to both accumulate the steps, and have a callback.
    steps.push({
      'output' : output.slice(0), // this is a trick to make a copy of output, rather than a reference to it.
      'buffer' : buffer,
    })
    switch(input[i]) {
      case '(':
        output.push('(')
        break
        // if you are confused why this is here, it is because case
        // statements automatically continue to the next case.
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
  return steps
}

console.log(tokenizer('(foo bar baz "quux gaarply")'))
