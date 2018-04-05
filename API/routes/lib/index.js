  
const codewincajadb = require("../../lib/index");
const config = require("../../lib/config");

async function runZR() {
  const { setupQ } = await codewincajadb(config.zr).catch(handleFatalError);
  const item = await setupQ.findByNoClaveSat().catch(handleFatalError);
  return item;
}

async function runVC() {
  const { setupQ } = await codewincajadb(config.vc).catch(handleFatalError);
  const item = await setupQ.findByNoClaveSat().catch(handleFatalError);
  return item;
}

async function runOL() {
  const { setupQ } = await codewincajadb(config.ol).catch(handleFatalError);
  const item = await setupQ.findByNoClaveSat().catch(handleFatalError);
  return item;
}

async function runJL() {
  const { setupQ } = await codewincajadb(config.jl).catch(handleFatalError);
  const item = await setupQ.findByNoClaveSat().catch(handleFatalError);
  return item;
}

async function runBO() {
  const { setupQ } = await codewincajadb(config.bo).catch(handleFatalError);
  const item = await setupQ.findByNoClaveSat().catch(handleFatalError);
  return item;
}

async function NoUtility() {
  const { setupQ } = await codewincajadb(config.zr).catch(handleFatalError);
  const item = await setupQ
    .findByNoUtility(config.zr, 2, 1)
    .catch(handleFatalError);
  return item;
}
 

const handleFatalError = err => {
  console.error(`${chalk.red("[codewincaja-db:Mensaje]")} `, err.message);
  console.error(`${chalk.red("[codewincaja-db:Detalle]")} `, err.stack);
  // process.exit(1)
};

module.exports = {
  runZR,
  runVC,
  runOL,
  runJL,
  runBO,
  NoUtility
};
