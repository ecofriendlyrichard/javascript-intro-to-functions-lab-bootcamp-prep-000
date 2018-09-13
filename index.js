/*

describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})

describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})

describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})

describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
*/



//function 5,6,7
function sayHiToGrandma(string){
  if(string==="I love you, Grandma.")
  {
      return "I love you, too.";
  }
  else if (string===string.toUpperCase())
  {
    return "YES INDEED!";
  }
  else (string===string.toLowerCase())
  {
      return 'I can\'t hear you!';
  }
}


//function 4
function logWhisper(string){
  if(string===string.toLowerCase())
  {
  }

}

//function 3
function logShout(string){
  if(string.toUpperCase()===string) {
    
  }
}


//function 2
function whisper(string){
  return string.toLowerCase();
}


//function 1
function shout(string){
  return string.toUpperCase();
}