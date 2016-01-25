// ************************************************************
// ** CONTACT
// ** models/contact.js
// ** public/contact.html
// ************************************************************
F.route('/api/contact/', function() {
	var self = this;

	// Additional values
	self.body.ip = self.ip;
	// self.body.iduser = self.user.id;

	self.body.$async(self.callback(), 0).$save().$workflow('mail');
}, ['post', '*Contact']);


// ************************************************************
// ** NEWSLETTER
// ** models/newsletter.js
// ** public/newsletter.html
// ************************************************************
F.route('/api/newsletter/', function() {
	var self = this;

	// Additional values
	self.body.ip = self.ip;

	self.body.$async(self.callback(), 1).$workflow('check').$save();

}, ['post', '*Newsletter']);