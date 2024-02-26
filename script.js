const container1 = document.getElementById("astros");
const container2 = document.getElementById("location");

fetch("http://api.open-notify.org/astros.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    container1.innerHTML = `<h1>Number of people in space right now: <div class = jsonnumber>- ${json.number} -</div></h1>`;

    json.people.forEach((person) => {
      container1.innerHTML += `<p>🧑🏻‍🚀 ${person.name} - on the ${person.craft}</p>`;
    });
  });

fetch("http://api.open-notify.org/iss-now.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    container2.innerHTML = `<h2>The ISS is now located at: <div class = jsonlocation>${json.iss_position.longitude}, ${json.iss_position.latitude}</div></h2>`;
  });
