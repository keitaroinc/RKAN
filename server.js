/*
Copyright (c) 2017 Keitaro AB

Use of this source code is governed by an MIT license
that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
*/

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(port);
console.log('Server started');