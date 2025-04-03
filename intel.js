async function searchIntelX(id) {
    const apiKey = "API";
    const url = `https://2.intelx.io/intelligent/search/result?id=${id}`;

    let response = await fetch(url, {
        headers: { "x-key": apiKey }
    });

    let data = await response.json();
    console.log(data);
}
