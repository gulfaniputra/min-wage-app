const provincesList = [
  { provinceName: "West Kalimantan", minWageRate: 2399699 },
  { provinceName: "Central Kalimantan", minWageRate: 2903145 },
  { provinceName: "South Kalimantan", minWageRate: 2877449 },
  { provinceName: "East Kalimantan", minWageRate: 2877449 },
  { provinceName: "North Kalimantan", minWageRate: 3000804 },
];

document.getElementById("enter").onclick = function () {
  let selectedOption = select.options[select.selectedIndex];

  if (selectedOption.text === "Pick A Province") {
    document.getElementById("rate").innerHTML = "Please pick a province!";
  } else if (selectedOption.text !== "Pick A Province") {
    switch (selectedOption.text) {
      case provincesList[0].provinceName:
        document.getElementById(
          "rate"
        ).innerHTML = `${provincesList[0].provinceName}'s minimum wage rate is ${provincesList[0].minWageRate}.`;
        break;
      case provincesList[1].provinceName:
        document.getElementById(
          "rate"
        ).innerHTML = `${provincesList[1].provinceName}'s minimum wage rate is ${provincesList[1].minWageRate}.`;
        break;
      case provincesList[2].provinceName:
        document.getElementById(
          "rate"
        ).innerHTML = `${provincesList[2].provinceName}'s minimum wage rate is ${provincesList[2].minWageRate}.`;
        break;
      case provincesList[3].provinceName:
        document.getElementById(
          "rate"
        ).innerHTML = `${provincesList[3].provinceName}'s minimum wage rate is ${provincesList[3].minWageRate}.`;
        break;
      case provincesList[4].provinceName:
        document.getElementById(
          "rate"
        ).innerHTML = `${provincesList[4].provinceName}'s minimum wage rate is ${provincesList[4].minWageRate}.`;
        break;
    }
  }
};
