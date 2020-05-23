const fs = require('fs');
module.exports = (filePath, res) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);

            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.write('Page not found!');
            res.end();
            return;
        }

        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write(data);
        res.end();
    })
}

   // alternative with Streams 

        // const index = fs.createReadStream(filePath);

        // index.on('data', (data) => {
        //     res.write(data);
        // });

        // index.on('end', () => res.end());

        // index.on('error', (err) => {
        //     console.log(err);
        // });