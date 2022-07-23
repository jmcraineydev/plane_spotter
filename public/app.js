async function submitEvent(event) {
  event.preventDefault();
  const userName = await document.getElementById("username").value;
  console.log(`new un: ${userName}`);
  if (!userName) {
    return -1;
  } else {
    const flightData = await axios
      .get(`http://localhost:4000/api/follows/${userName}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
    console.log(flightData);
    loadResults(flightData);
  }
}

function loadResults(data) {
  const resultsDiv = document.querySelector("#query_results");

  const flightEl = document.createElement("div");
  flightEl.className = "flights";
  flightEl.innerText = JSON.stringify(data, null, 4);

  resultsDiv.append(flightEl);
}

function clearQuery() {
  const query = document.getElementById("query_result");
  const flights = document.getElementsByClassName("flights");
  query.removeChild();
  document.querySelector("#username").reset();
}
