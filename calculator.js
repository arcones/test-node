const { Command } = require('commander');
const program = new Command();

program
  .command('sumar numero1 numero2')
  .description('Suma dos números enteros')
  .action((numero1, numero2) => {
    const result = parseInt(numero1) + parseInt(numero2);
    console.log(`El resultado es: ${result}`);
  });
