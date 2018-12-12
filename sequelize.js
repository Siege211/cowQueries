const Sequelize = require('sequelize')
//const cow = require('./cows.js')

const sequelize = new Sequelize({
	database: 'Cows',
	username: 'root',
	password: null,
	host: 'localhost',
	//port: 9821,
	dialect: 'mysql',
	operatorsAliases: false,
	pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const cowModel = (sequelize,type) =>{
	sequelize.define('Cows', {
		name: {
			type: Sequelize.STRING
		},
		description: {
			type: Sequelize.STRING
		}
	});
}
/*cowModel.sync({force:true}).then(()=>{
	console.log('cowModel sync invoked');
	return cowModel.create({
		name: 'Miltank',
		description: 'Uses rollout'
	})
})*/

module.exports = {
	cowModel
}