//added this js file to automatically run the index.ejs file and render it as a index.html file
var ejs = require('ejs');
var fs = require('fs');

const templateFilePath = './views/index.ejs';
const destinationFilePath = './public/index.html';

const data = {  
    title: 'AVO Mobile Detailing | Auto Consultant',
    description: 'AVO Mobile Detailing | Auto Consultant',
    keywords: 'AVO Mobile Detailing | Auto Consultant',
};



ejs.renderFile(templateFilePath, data, {}, function(err, str){
    if(err){
        console.error("Error Rendering Template: ", err);
        return;
    } else {
        fs.writeFileSync(destinationFilePath, str, 'utf8', function(err){
            if(err){
                console.error("Error Writing Rendered Template: ", err);
                return;
            }
        });

        console.log("Template Rendered and Saved successfully as HTML: ", destinationFilePath);
    }
} );