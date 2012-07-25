s3proxy
=======

Allows use of Access-Control-Allow-Origin on Amazon S3 using node.js

Since Amazon S3 doesn't support `Access-Control-Allow-Origin`, we needed a way to have our deploy on Heroku work. This simple node proxy just relays the data from any s3 bucket and adds in the `Access-Control-Allow-Origin` header.

The current version allows access to any host.
