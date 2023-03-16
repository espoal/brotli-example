
export const helloHandler = async (stream, headers) => {
    stream.respond({
        'content-type': 'text/html; charset=utf-8',
        ':status': 200,
    });
    stream.end('<h1>Hello World</h1>');
}

export const faviconHandler = async (stream, headers) => {

    stream.respond({
        'content-type': 'image/x-icon',
        ':status': 200,
    });
    stream.end();
}
