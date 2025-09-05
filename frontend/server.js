const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = 8080;

const professionalData = {
    professionalName: "Shawn N Kyne",
    base64Image: "...",
    nameLink: {
        firstName: 'Shawn',
        url: 'www.github.com'
    },
    primaryDescription: "This is a description",
    workDescription1: "This is a description abt work",
    workDescription2: "This is a description abt work",

    linkTitleText: "Links",
    linkedInLink:{
        text: 'LinkedIn',
        link: "https://www.linkedin.com"
    },
    githubLink:{ 
        text: 'Github',
        link: "https://www.github.com"}
};

app.get('/professional',(req, res) => {
    res.status(200).json(professionalData);
});

app.listen(port, () => {
    console.log(`✅ Server is running and listening on http://localhost:${port}`);
});