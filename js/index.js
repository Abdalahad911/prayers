let select = document.querySelector("select");
// axios
//   .get("https://api.aladhan.com/v1/calendarByCity", { params: params })
//   .then(response => {
//     let times = response.data.data[4];
//     console.log(response.data.data[4].date);

//     let prayersDiv = Array.from(document.querySelector(".Prayers").children);
//     console.log(prayersDiv[0].children);

//     // fill country name
//     fillTimeForPrayer("fajr-time", times.timings.Fajr.slice(0, 5));
//     fillTimeForPrayer("shrouk-time", times.timings.Sunrise.slice(0, 5));
//     fillTimeForPrayer("dhaur-time", times.timings.Dhuhr.slice(0, 5));
//     fillTimeForPrayer("asr-time", times.timings.Asr.slice(0, 5));
//     fillTimeForPrayer("maghrib-time", times.timings.Maghrib.slice(0, 5));
//     fillTimeForPrayer("isha-time", times.timings.Isha.slice(0, 5));

//     // fill date
//     document.querySelector(".date").textContent =
//       times.date.hijri.weekday.ar + " " + times.date.readable;
//     getPrayersOfCity();
//   });
// function fillTimeForPrayer(id, time) {
//   document.getElementById(id);
//   document.getElementById(id).textContent = time;
// }

function getPrayersOfCity(cityName, countryName) {
  let params = {
    country: cityName,
    city: countryName
    // city: countryName,
    // country: cityName
  };
  fetch(
    `https://api.aladhan.com/v1/calendarByCity?country=${params.country}&city=${params.city}	`,
    {
      params: params
    }
  )
    .then(response => response.json())
    .then(data => {
      console.log();
      let times = data.data[4];
      // console.log(data.data.data[4].date);

      let prayersDiv = Array.from(document.querySelector(".Prayers").children);
      console.log(prayersDiv[0].children);

      // fill country name
      fillTimeForPrayer("fajr-time", times.timings.Fajr.slice(0, 5));
      fillTimeForPrayer("shrouk-time", times.timings.Sunrise.slice(0, 5));
      fillTimeForPrayer("dhaur-time", times.timings.Dhuhr.slice(0, 5));
      fillTimeForPrayer("asr-time", times.timings.Asr.slice(0, 5));
      fillTimeForPrayer("maghrib-time", times.timings.Maghrib.slice(0, 5));
      fillTimeForPrayer("isha-time", times.timings.Isha.slice(0, 5));

      // fill date
      document.querySelector(".date").textContent =
        times.date.hijri.weekday.ar + " " + times.date.readable;
    });
}
function fillTimeForPrayer(id, time) {
  document.getElementById(id);
  document.getElementById(id).textContent = time;
}
// let cities = [
//   {
getPrayersOfCity("EG-ALX", "EG");
//     arabic: "الأسكندريه",
//     en: "GB"
//   },
//   {
//     arabic: "القاهره",
//     en: "EG"
//   }
// ];
select.onchange = function() {
  document.querySelector(".country").textContent = select.value;
  // for (city of cities) {
  //   if (city.arabic == select.value) {
  //     getPrayersOfCity("EG-PTS", city.en);
  //   }
  if (select.value == "الأسكندريه") {
    console.log("ALX");

    getPrayersOfCity("POPO-ALX", "GB");
  } else if (select.value == "بورسعيد") {
    console.log("POR");

    getPrayersOfCity("EG-PTS", "EG");
  } else if (select.value == "القاهره") {
    console.log("CA");

    getPrayersOfCity("EG-C", "EG");
  } else {
    console.log("RED");

    getPrayersOfCity("GBEF", "London");
  }
};
document.querySelector(".country").textContent = select.value;
