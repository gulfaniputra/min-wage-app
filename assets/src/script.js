const provincesList = [
  { provinceName: "Click For Provinces List", minWageRate: 0 },
  { provinceName: "Aceh", minWageRate: 3165031 },
  { provinceName: "North Sumatra", minWageRate: 2499423 },
  { provinceName: "West Sumatra", minWageRate: 2484041 },
  { provinceName: "Riau", minWageRate: 2888564 },
  { provinceName: "Jambi", minWageRate: 2630162 },
  { provinceName: "South Sumatra", minWageRate: 3043111 },
  { provinceName: "Bengkulu", minWageRate: 2213604 },
  { provinceName: "Lampung", minWageRate: 2432002 },
  { provinceName: "Bangka Belitung Islands", minWageRate: 3230024 },
  { provinceName: "Riau Islands", minWageRate: 3005460 },
  { provinceName: "Special Capital Region Of Jakarta", minWageRate: 4276350 },
  { provinceName: "West Java", minWageRate: 1810351 },
  { provinceName: "Central Java", minWageRate: 1742015 },
  { provinceName: "Special Region Of Yogyakarta", minWageRate: 1704608 },
  { provinceName: "East Java", minWageRate: 1768777 },
  { provinceName: "Banten", minWageRate: 2460997 },
  { provinceName: "Bali", minWageRate: 2494000 },
  { provinceName: "West Nusa Tenggara", minWageRate: 2183883 },
  { provinceName: "East Nusa Tenggara", minWageRate: 1950000 },
  { provinceName: "West Kalimantan", minWageRate: 2399699 },
  { provinceName: "Central Kalimantan", minWageRate: 2903145 },
  { provinceName: "South Kalimantan", minWageRate: 2877449 },
  { provinceName: "East Kalimantan", minWageRate: 2981379 },
  { provinceName: "North Kalimantan", minWageRate: 3000804 },
  { provinceName: "North Sulawesi", minWageRate: 3310723 },
  { provinceName: "Central Sulawesi", minWageRate: 2303711 },
  { provinceName: "South Sulawesi", minWageRate: 3103800 },
  { provinceName: "Southeast Sulawesi", minWageRate: 2552015 },
  { provinceName: "Gorontalo", minWageRate: 2788826 },
  { provinceName: "West Sulawesi", minWageRate: 2678863 },
  { provinceName: "Maluku", minWageRate: 2604961 },
  { provinceName: "North Maluku", minWageRate: 2721530 },
  { provinceName: "West Papua", minWageRate: 3134600 },
  { provinceName: "Papua", minWageRate: 3516700 },
];

document.getElementById("select").onchange = function () {
  let selectedOption = select.options[select.selectedIndex];

  let convertRateRupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(provincesList[select.selectedIndex].minWageRate);

  if (
    selectedOption.text === provincesList[select.selectedIndex].provinceName
  ) {
    document.getElementById("rate").textContent = convertRateRupiah;
  }
};
