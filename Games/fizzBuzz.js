


function fizzBuzz(x, parameters){
  for(let i = 1; i <= x; i++){
    let print = ''
    for(let param = 0; param < parameters.length; param++){
      print += parameters[param][0](i) ? parameters[param][1] : ''
    }
    print = (print === "") ? i : print
    console.log(print)
  }
}

function divisibleByMe(i, me) {
  return i % me === 0
}

const FIZZ = "FIZZ"
const BUZZ = "BUZZ"
let parameters = [[(x) => divisibleByMe(x, 3), FIZZ], [(x) => divisibleByMe(x, 5), BUZZ]]

fizzBuzz(20, parameters)
console.log([123,1].slice(0,2))
