var xlsx = require("xlsx");
var fs = require("fs");
var path = require("path");
var foler = "dafiles"


function looptojson(filename) {

     var wb = xlsx.readFile(filename);
     var firsttab = wb.SheetNames[0];
     var ws = wb.Sheets[firsttab];
     var data = xlsx.utils.sheet_to_json(ws);
     return data;
}

var dir = path.join(__dirname,"dafiles");

var files = fs.readdirSync(dir);

var combinedata = [];
files.forEach(function(file){

    var extension = path.parse(file).ext;
    if(extension=== ".xlsx"){
        var dirr = path.join(__dirname,foler,file);
        var data = looptojson(dirr)
     combinedata = combinedata.concat(data);
    }
})


var lastwb = xlsx.utils.book_new();
var lastws = xlsx.utils.json_to_sheet(combinedata);


xlsx.utils.book_append_sheet(lastwb,lastws,"Sheet1");

xlsx.writeFile(lastwb,"FinalReport.xlsx");