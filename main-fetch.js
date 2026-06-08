function loadData() {

  fetch("./data.json")

    // Convert response into JavaScript object

    .then(response => response.json())

    // Use the data

    .then(data => {

      document.querySelector("#output").innerHTML = `

        <p>Name: ${data.name}</p>

        <p>Age: ${data.age}</p>

        <p>Enrolled: ${data.enrolled}</p>

        <p>Grade: ${data.grade}</p>

        <p>Course: ${data.course}</p>

      `;

    })

    // Handle errors

    .catch(error => {

      console.error("Something went wrong:", error);

    });

}

loadData();