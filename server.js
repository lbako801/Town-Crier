const path = require('path');
const express = require('express');

const app = express();

//Telling server to use the static pages (handlebars) in the public folder
app.use(express.static(path.join(__dirname,'public')));

// Setting server PORT as 3000 OR the environmental port
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));