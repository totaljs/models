NEWSCHEMA('Contact').make(function(schema) {

	schema.define('name', 'String(50)', true);
	schema.define('email', 'String(200)', true);
	schema.define('phone', 'String(30)');
	schema.define('body', String, true);
	schema.define('ip', 'String(60)');

	schema.setSave(function(error, model, options, callback) {

		var data = model.$clean();

		// Additional data
		data.id = U.GUID(10);
		data.datecreated = new Date();

		// TODO: Insert into DB
		// DB('contact').insert(data);

		// Response
		callback(SUCCESS(true));
	});

	schema.addWorkflow('mail', function(error, model, options, callback) {
		// var mail = F.mail(CONFIG('mail.to'), 'New contact form', '~mails/contact', model);
		// Reply address to user's email
		// mail.reply(model.email, true);
		callback(SUCCESS(true));
	});

	schema.setValidate(function(name, value) {
		switch (name) {
			case 'name':
			case 'body':
				return value.length > 1;
			case 'email':
				return value.isEmail();
		}
	});

	schema.setPrepare(function(name, value) {
		switch (name) {
			case 'email':
				return value.toLowerCase();
		}
	});
});