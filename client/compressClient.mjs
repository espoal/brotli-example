const url = `https://localhost:8443/upload-url`

const compressionStream = new CompressionStream('gzip')
const writer = await compressionStream.writable.getWriter()
await writer.write("Hello world")
await writer.close()
const reader = await compressionStream.readable.getReader()

const resp = await fetch(url, {
    method: 'POST',
    body: reader,
    headers: {
        'content-type': 'application/octet-stream',
    }
})

const text = await resp.text()
console.log({ resp, text })
