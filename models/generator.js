var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var generatorSchema = new Schema({
	
	 Name: String,
	 ProductId: Number,
	 DaysValid: Number,
	 Code: String,
	 Active: Boolean,
	 LicensesAllocated: Number,
	 LicensesValidated: Number,
	 Notes: String,
	 EmailFrom: String,
	 EmailFromName: String,
	 EmailSubject: String,
	 EmailMessage: String,
	 EmailAttachments: String,
	 LinkExpiryDays: Number,
	 InvalidIPNEmail: String,
	 PaypalEmail: String,
	 AccessCode: String,
	 NotifyAdmin: Boolean,
	 AdminEmail: String,
	 RedirectUrl: String,
	 AddToAutoresponder: Boolean,	 
	 CheckLicenseOnSiteReg: Boolean,
	 UseIPN: Boolean,
	 AutoLogon: Boolean,

});

module.exports = mongoose.model('Generator', generatorSchema);