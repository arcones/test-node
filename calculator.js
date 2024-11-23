const { Command } = require('commander');
const program = new Command();

program
  .command('sumar numero1 numero2')
  .description('Suma dos números ')
  .action((numero1, numero2) => {
    const result = parseFloat(numero1) + parseFloat(numero2);
    console.log(`=>  ${result} <=`);
  });

program
  .command('restar numero1 numero2')
  .description('Resta dos números')
  .action((numero1, numero2) => {
    const result = parseFloat(numero1) - parseFloat(numero2);
    console.log(`=>  ${result} <=`);
  });

program
  .command('multiplicar numero1 numero2')
  .description('Multiplica dos números')
  .action((numero1, numero2) => {
    const result = parseFloat(numero1) * parseFloat(numero2);
    console.log(`=>  ${result} <=`);
  });

program.parse(process.argv);

