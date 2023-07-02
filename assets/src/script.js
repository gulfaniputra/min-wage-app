const json = '{"provinceName":"East Kalimantan", "minWageRate":2981379}';
const obj = JSON.parse(json);

document.getElementById("submit").onclick = function () {
  minWage();
};

function minWage() {
  document.getElementById("rate").innerHTML = obj.minWageRate;
}
