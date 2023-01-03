const mbHelper = require('../mountebank-helper');
const response = require('./Response.js')
const settings = require('../settings');

function addService() {

    const stubs = [
        {
            predicates: [ {
                equals: {
                    method: "GET",
                    "path": "/app/videogames"
                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(response.TestServiceResponse)
                    }
                }
            ]
        }
    ];

    const imposter = {
        port: settings.Test_Service_port,
        protocol: 'http',
        stubs: stubs
    };

    return mbHelper.postImposter(imposter);
}

module.exports = { addService };