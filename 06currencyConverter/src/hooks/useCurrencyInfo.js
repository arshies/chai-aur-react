import { useEffect, useState } from "react";

function useCurrencyInfo (currency) {
    let url = `https://v6.exchangerate-api.com/v6/d8639cde53387fcbaae89637/latest/${currency}`

    const [data , setData ] = useState({})

    useEffect(() =>{
        fetch(url).then((res)=> res.json())
        .then((res) => setData(res.conversion_rates) )
        console.log("data " , data)
    } , [currency])
    console.log("data1 " , data)

    return data
}

export default useCurrencyInfo