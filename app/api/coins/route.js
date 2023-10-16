import { NextResponse } from "next/server";

async function fetchCoins() {
    const response = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', {
        "method" : 'GET',
        "headers" : {
            'X-RapidAPI-Key': 'f123cc742dmsh855a7bab8669bd3p1b94e2jsn11706a62c645',
		    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }   
    })

    const coins = await response.json();
    return coins;
    
}

export async function GET(request) {
    const coins = await fetchCoins();
    return NextResponse.json(coins);
}

