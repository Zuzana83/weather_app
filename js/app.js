// Variables
const tbodyEl = document.getElementById("tbody");

 // Fetch data from API
 async function getConditions() {
    const res = await fetch("https://meta-weather.now.sh/api/location/44418/2018/4/30/");

    const data = await res.json();

    return data;    
}

// Show info in table
async function showTable() {
    const outputs = await getConditions();
    const exactDay = outputs.slice(0, 13);

    exactDay.forEach(item => {
        const {created, weather_state_name, the_temp, air_pressure, humidity, visibility} = item;
        const rowEl = document.createElement("tr");

        // Style date info
        const weatherDate = new Date(created);
        const month = weatherDate.getMonth() + 1;
        const date = weatherDate.getDate();
        const year = weatherDate.getFullYear();
        const hours = weatherDate.getHours();
        const minutes = weatherDate.getMinutes();

        let styledDate = `${date}/${month}/${year} ${hours}:${minutes}`;
        
        rowEl.innerHTML = `
            <td>${styledDate}</td>
            <td>${weather_state_name}</td>
            <td>${the_temp.toFixed(1)}</td>
            <td>${Math.round(air_pressure)}</td>
            <td>${humidity}</td>
            <td>${visibility.toFixed(2)}</td>
        `;

        tbodyEl.appendChild(rowEl);

        // console.log(styledDate);
        // console.log(typeof air_pressure);
    });

    console.log(exactDay);
}

// Show initial table
showTable();






