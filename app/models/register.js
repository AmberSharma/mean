// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose')
	Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// config files
var db = require('../../config/db');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
var RegisterSchema = new Schema ({
	emp_name : {type : String, default: ''},
    emp_office_id:{type: String, default: ''},
    emp_passwd:{type: String, default: ''},
});



RegisterSchema.methods.create = function (req, cb) {
  	//return this.model('Animal').find({ type: this.type }, cb);
  	//mongoose.connection.close();
  	mongoose.connect(db.dbUrl);
  	var connect = mongoose.connection;
  	//connect.on('error', console.error.bind(console, 'connection error:'));
	connect.once('open', function() {
		var saveDataObj = new RegisterObj(req);
		saveDataObj.save(function (err) {
  			if (err) {
  				console.log ('Error on save!');
  			}
  			else {
  				console.log ('saved')
  			}
  		});
	});
	mongoose.disconnect();
	cb();
}

var RegisterObj = mongoose.model('Register', RegisterSchema);
module.exports = mongoose.model('Register');

// module.exports = mongoose.model('Register', {
//     emp_name : {type : String, default: ''},
//     emp_office_id:{type: String, default: ''},
//     emp_passwd:{type: String, default: ''},
// });