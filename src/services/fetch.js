//Page to host json on - only valid for 24h or 100 access times
//https://jsonserve.com/

export const getData = async () => {
    const response = await fetchData("https://api.jsonbin.io/v3/qs/63cd48d5c0e7653a055e8524", "GET");
    return await response.json();
};

async function fetchData(url, method = "GET", data = {}) {

    const response = await fetch(url, {
        method: method,
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Autorization: "Bearer <token>",
        },
        body: method !== "GET" ? JSON.stringify(data) : null,
    });
    return response;
}
