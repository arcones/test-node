const { Command } = require('commander');
const program = new Command();

program
  .command('sumar numero1 numero2')
  .description('Suma dos números enteros')
  .action((numero1, numero2) => {
    const result = parseInt(numero1, 10) + parseInt(numero2, 10);
    console.log(`El resultado es: ${result}`);
  });

program
  .command('restar numero1 numero2')
  .description('Resta dos números enteros')
  .action((numero1, numero2) => {
    const result = parseInt(numero1, 10) - parseInt(numero2, 10);
    console.log(`El resultado es: ${result}`);
  });

program.parse(process.argv);

