let input = document.querySelector("#input");

let info;

// https://github.com/randyhkim/seoul-bike/tree/master/public 참조주소
// https://data.seoul.go.kr/dataList/OA-15493/A/1/datasetView.do# 따릉이 주소

document.querySelector("#btn1").addEventListener("click", function() {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "http://localhost:3000/hackathon", false);
  xhr.send();

  info = JSON.parse(xhr.responseText);

  let rackTotCnt = 0, // 거치대 개수
      stationName = "", // 대여소 이름
      parking = 0, // 자전거 주차총건수
      stationLatitude = 0, // 위도
      stationLongitude = 0, // 경도
      stationId = ""; // 대여소ID

  // info.rentBikeStatu.row.forEach((value, i) => {
  //   stationName = info[i]["stationName"];
  //   parking = info[i]["parking"];
  //   stationId = info[i]["stationId"];
  // });

  console.log(info);
});