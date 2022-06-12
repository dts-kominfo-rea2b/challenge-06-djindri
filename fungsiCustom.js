// TODO: import module bila dibutuhkan di sini
const fs = require('fs');
const { resourceLimits } = require('worker_threads');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
//const bacaData = null;

//baca data JSON
const bacaData = (fnCallback) => {
  const ambilKata = [];

  //ambil kata pada file data1.json
  fs.readFile(file1, (err, data) => {
      if (err) fnCallback(err);
      let ambilData = JSON.parse(data);
      let ambilPesan = ambilData.message.split(" ");
      ambilKata.push(ambilPesan[1]);

      //ambil kata pada file data2.json
      fs.readFile(file2, (err, data) => {
          if (err) fnCallback(err);
          let ambilData = JSON.parse(data);
          let ambilPesan = ambilData[0].message.split(" ");
          ambilKata.push(ambilPesan[1]);
 
          //ambil kata pada file data3.json    
          fs.readFile(file3, (err, data) => {
              if (err) fnCallback(err);
              let ambilData = JSON.parse(data);
              let ambilPesan = ambilData[0].data.message.split(" ");
              ambilKata.push(ambilPesan[1]);
 
              return fnCallback(err, ambilKata);
          });
      });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
