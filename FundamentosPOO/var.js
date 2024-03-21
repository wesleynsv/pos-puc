function testVar() {
  if (true) {
      var x = 5;
  }

  console.log(x); //a variável é visível em qualquer lugar dentro da função
}

testVar();  // Isso imprimirá 5 no console
