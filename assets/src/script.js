const json = '{"provinceName":"East Kalimantan", "minWageRate":2981379}';
const object = JSON.parse(json);

document.getElementById("enter").onclick = function () {
  let selectedOption = select.options[select.selectedIndex];

  if (selectedOption.text == "Pick A Province") {
    document.getElementById("rate").innerHTML = "Please pick a province";
  } else if (selectedOption.text != "Pick A Province") {
    if (selectedOption.text == object.provinceName)
      document.getElementById("rate").innerHTML = object.minWageRate;
  }
};
