const url = "https://tabular-api.data.gouv.fr/api/resources/17f7cfd9-a5fe-4b6a-9f5d-3625feaa396e/data/";
fetch(url)
.then(response => {return response.json()})
.then(json => {
    console.log(json);
})