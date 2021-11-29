import { useEffect,useState } from "react/cjs/react.development";
import axios from "axios";

export default function useFetch(url) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    async function fetchData() {
        try {

            const { data: responseData } = await axios.get(url);
            setData(responseData)
            setLoading(false)

        } catch (err) {
            setError(err.message)
            setLoading(false)

        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {error,loading,data}

}