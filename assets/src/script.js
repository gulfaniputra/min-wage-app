const json = '{"provinceName":"East Kalimantan", "minWageRate":2981379}';
const obj = JSON.parse(json);

enter.onclick = function () {
  document.getElementById("rate").innerHTML = obj.minWageRate;
};
