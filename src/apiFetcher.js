const urls = {
    apiGet : `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${ process.env.REACT_APP_API_TOKEN}&ipAddress=8.8.8.8`
}

export async function getIP(){
    try{
        const response = await fetch(urls.apiGet);
        const dataJson = await response.json();
        return dataJson;
    }catch (error){
        return `API load failed (${error})`;
    }
}