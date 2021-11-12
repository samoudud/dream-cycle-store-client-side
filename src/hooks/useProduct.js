import { useEffect, useState } from "react";


const useProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://infinite-everglades-57126.herokuapp.com/products?size=6')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(error => console.log(error.message))
            .finally(() => setLoading(false));
    }, [])

    return {
        products,
        loading
    }
}

export default useProduct;