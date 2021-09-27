import { useEffect, useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        case 'loading':
            return {
                ...state, loading: true
            };
        case 'done':
            return {
                ...state, loading: false
            };
        case 'putData':
            return {
                ...state, data: action.data, loading: false
            }
    }
}

const useFetch: (getAPI: (params: any) => Promise<any>, params: any) => [
    any, (params?: any) => void, (params?: any) => void
] = (getAPI, params) => {
    const [state, dispatch] = useReducer(reducer, { data: null, loading: false })
    const fetchData = async (params?: any) => {
        dispatch({ type: "loading" })
        try {
            const res = await getAPI(params)
            dispatch({ type: "putData", data: res })
        } catch (err) {
            dispatch({ type: "putData", data: err })
        }
    }
    useEffect(() => {
        fetchData(params)
    }, [])
    const getData = (params: any) => {
        fetchData(params)
    }
    const resetData = () => {
        fetchData()
    }
    return [state, getData, resetData]
}
export default useFetch