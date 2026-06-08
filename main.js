  async function loadData() {

      // Fetch the JSON file

      const response = await fetch("./data.json");

      // Convert JSON text into a JavaScript object

      const data = await response.json();

      // Output values

      document.querySelector("#output").innerHTML = `

        <p>Name: ${data.name}</p>

        <p>Age: ${data.age}</p>

        <p>Enrolled: ${data.enrolled}</p>

        <p>Grade: ${data.grade}</p>

        <p>Course: ${data.course}</p>

      `;

    }

    loadData();