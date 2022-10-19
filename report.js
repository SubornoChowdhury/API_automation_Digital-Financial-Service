const newman = require('newman');

newman.run({
    collection: require('./collection/Digital_Financial_Service.json'), // pointing to local JSON file.
    //environment: require('./collection/customer_api_env.json'), // pointing to local env file
    iterationCount: 1,
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {
            export: './reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
    
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});