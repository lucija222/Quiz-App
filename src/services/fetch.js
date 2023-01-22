//Page to host json on - only valid for 24h or 100 access times
//https://jsonserve.com/

export const getData = async () => {
    const data = await fetchData("https://api.jsonbin.io/v3/qs/63cd48d5c0e7653a055e8524", "GET");
    // const x = await response;
    console.log(data);
    return data;
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
