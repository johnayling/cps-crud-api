var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var licenseSchema = new Schema({

	Name: String, 
	Email: String,
	TransactionId: String,
	HardwareId: String, 
	DateCreated: Date, 
	DateModified: Date,
	LastValidated: Date,
	LastValidationResult: String, 
	Active: Boolean, 
	ActivationDate: Date, 
	Notes: String, 
	LicensesAllocated: Number, 
	LicensesValidated: Number, 
	DaysValid: Number, 
	ProductId: Number, 
	AutogenId: Number
});

module.exports = mongoose.model('License', licenseSchema);