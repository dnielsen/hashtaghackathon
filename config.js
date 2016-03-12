var config = {};

config.app = {
    name: "Twitter Stream",
    description: "Twitter Stream to Redis",
    version: "0.0.1",
    keyword: "#sxsw"
};

config.redis = {
    port: process.env.REDIS_PORT || '',
    host: process.env.REDIS_HOST || '',
    auth: process.env.REDIS_AUTH || ''
};

config.twitter =
{
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
};

module.exports = config;
