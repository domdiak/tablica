export default function fetcher(url: string, data = undefined) {
    console.log("Data in Fetcher", data);
    console.log("Data in Fetcher", url);
    console.log("Fetcher in use...");

    return fetch(`${window.location.origin}/api${url}`, {
        method: data ? "POST" : "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => {
        if (res.status > 399 && res.status < 200) {
            throw new Error();
        }
        return res.json();
    });
}
