
export const uploadUrlHandler = async (stream, headers) => {
    stream.respond({
        'accept-encoding': 'br, gzip, deflate',
        ':status': 200,
    });

    for await (const chunk of stream) {
        console.log({ chunk })
    }
    stream.end('Hello world');
}
