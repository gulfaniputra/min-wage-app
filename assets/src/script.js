const provincesList = [
  { provinceName: "Pick A Province", minWageRate: 0 },
  { provinceName: "West Kalimantan", minWageRate: 2399699 },
  { provinceName: "Central Kalimantan", minWageRate: 2903145 },
  { provinceName: "South Kalimantan", minWageRate: 2877449 },
  { provinceName: "East Kalimantan", minWageRate: 2981379 },
  { provinceName: "North Kalimantan", minWageRate: 3000804 },
];

document.getElementById("select").onchange = function () {
  let selectedOption = select.options[select.selectedIndex];

  if (
    selectedOption.text === provincesList[select.selectedIndex].provinceName
  ) {
    document.getElementById("rate").innerHTML = `The minimum wage rate is ${
      provincesList[select.selectedIndex].minWageRate
    }.`;
  }
};
