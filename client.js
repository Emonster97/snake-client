const { builtinModules } = require("module");
const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
    
  });
  conn.on('connect', (data) => {
    console.log("Successfully connected to game server");
  })
  conn.on('connect', () => {
    conn.write('Name: WME');
  });
  conn.on('data', (data) => {
    console.log('you ded cuz you idled');
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;