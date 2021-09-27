import { useDispatch } from "react-redux"
import { getString } from "../apis/map"

export  const getNum = async ()=>{
    const num = await getString(true)
    return num
}