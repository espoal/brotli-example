
const url = `https://localhost:8443/upload-url`

const resp = await fetch(url, {
    method: 'POST',
    body: "Hello world",
    headers: {
        'content-type': 'application/octet-stream',
    }
})

const text = await resp.text()
console.log({ resp, text })
