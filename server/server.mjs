import http2 from 'node:http2';
import fs from 'node:fs';
import {helloHandler, faviconHandler} from "./hello.mjs";
import { uploadUrlHandler } from "./upload.mjs";

const server = http2.createSecureServer({
    key: fs.readFileSync('./localhost-privkey.pem'),
    cert: fs.readFileSync('./localhost-cert.pem'),
});
server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
    // stream is a Duplex
    const path = headers[':path'];
    console.log({ path })
    switch (path) {
        case '/':
            helloHandler(stream, headers);
            break;
        case '/favicon.ico':
            faviconHandler(stream, headers);
            break;
        case '/upload-url':
            uploadUrlHandler(stream, headers);
            break;
        default:
            stream.respond({ ':status': 404 });
            stream.end('Not Found');

    }

});

server.listen(8443);
