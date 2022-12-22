let info;

let arr = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let arr6 = [];
let array = [];

(function main() {
  list1();
  list2();
  list3();
  list4();
  list5();
  list6();

  array = arr.concat(arr2, arr3, arr4, arr5, arr6);

  console.log(array);
})();

function list1() {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "http://localhost:3000/hackathon", false);
  xhr.send();

  info = JSON.parse(xhr.responseText);

  for (let value in info.TbPharmacyOperateInfo.row) {

    arr[value] = info.TbPharmacyOperateInfo.row[value];
  }
};

function list2() {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "http://localhost:3000/hackathon2", false);
  xhr.send();

  info = JSON.parse(xhr.responseText);

  for (let value in info.TbPharmacyOperateInfo.row) {

    arr2[value] = info.TbPharmacyOperateInfo.row[value];
  }
};

function list3() {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "http://localhost:3000/hackathon3", false);
  xhr.send();

  info = JSON.parse(xhr.responseText);

  for (let value in info.TbPharmacyOperateInfo.row) {

    arr3[value] = info.TbPharmacyOperateInfo.row[value];
  }
};

function list4() {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "http://localhost:3000/hackathon4", false);
  xhr.send();

  info = JSON.parse(xhr.responseText);

  for (let value in info.TbPharmacyOperateInfo.row) {

    arr4[value] = info.TbPharmacyOperateInfo.row[value];
  }
};

function list5() {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "http://localhost:3000/hackathon5", false);
  xhr.send();

  info = JSON.parse(xhr.responseText);

  for (let value in info.TbPharmacyOperateInfo.row) {

    arr5[value] = info.TbPharmacyOperateInfo.row[value];
  }
};

function list6() {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "http://localhost:3000/hackathon6", false);
  xhr.send();

  info = JSON.parse(xhr.responseText);

  for (let value in info.TbPharmacyOperateInfo.row) {

    arr6[value] = info.TbPharmacyOperateInfo.row[value];
  }
};