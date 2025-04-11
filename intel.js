async function searchIntelX(id) {
    const apiKey = "ad3c47e1-98e1-42ed-b677-3bbb7ebe353f";
    const url = `https://2.intelx.io/intelligent/search/result?id=${id}`;

    let response = await fetch(url, {
        headers: { "x-key": apiKey }
    });

    let data = await response.json();
    console.log(data);
}
