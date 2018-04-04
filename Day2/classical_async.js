// url = 'http://example.com/path/file.jpg'
function downloadFile(url, downloaded) {
    if (!(url.split('://')[0] === 'http' ||
            url.split('://') === 'https')) {
        return downloaded(new Error("Url must start with http/https"))
    }

    console.log("Started download " + url)
    // Save it inside 'C:/Windows/Images/'
    let savePath = 'C:/Windows/Images/' + url.split('/').pop()

    setTimeout(() => {
        console.log("Saved to " + savePath)
        downloaded(null, savePath)
    }, 3000)

}
//path = 'C:/Windows/Images/file.jpg'
function compressFile(path, compressed) {
    console.log("Going to compress " + path)

    let fileNameArr = path.split('/').pop().split('.')

    if (!(fileNameArr[1] === 'jpg' || fileNameArr[1] === 'png')) {
        return compressed(new Error("We can only compress jpg or png files"))
    }

    let fileName = fileNameArr[0]
    let compressedPath = 'C:/Files/' + fileName + '.zip'

    setTimeout(() => {
        console.log("Compressed to " + compressedPath)
        compressed(null, compressedPath)
    }, 2000)
}

//path = 'C:/Files/file.zip'
function uploadFile(path, uploaded) {
    console.log("Uploading file " + path)
    // ftp://fileserver.com/zipimages/file.zip
    let fileName = path.split('/').pop()

    if (!fileName.charAt(0).match(/([a-z][A-Z])/)) {
        return uploaded(new Error("Cannot upload files with name not starting with alphabet"))
    }

    let uploadedPath =
        'ftp://fileserver.com/zipimages/' +
        path.split('/').pop()

    setTimeout(() => {
        console.log("Uploaded to " + uploadedPath)
        uploaded(null, uploadedPath)
    }, 2500)
}


function start(url) {

    downloadFile(url, (err1, savedPath) => {
        if (err1) throw err1
        compressFile(savedPath, (err2, compressedPath) => {
            if (err2) throw err2
            uploadFile(compressedPath, (err3, uploadedUrl) => {
                if (err3) {
                    console.error(err3)
                    alert("Could not upload")
                }
            })
        })
    })

}