NEWSCHEMA('Newsletter').make(function(schema) {

	schema.define('email', 'String(200)', true);
	schema.define('ip', 'String(60)');

	schema.setSave(function(error, model, options, callback) {

		var data = model.$clean();

		// Additional data
		data.datecreated = new Date();

		// TODO: insert into DB
		// DB('newsletter').insert(data);

		// Response
		callback(SUCCESS(true));
	});

	schema.addWorkflow('check', function(error, model, options, callback) {
		// TODO: check in DB
		if (1 === 1)
			error.push('email', 'The email address exists in DB.');
		callback();
	});

	schema.setValidate(function(name, value) {
		switch (name) {
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