import { FormattedMessage } from "react-intl"
import CountryChoice from "../Shard/CountryChoice"
import { Button } from "antd";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { getString } from "../../apis/map";
const Overview = (props: any) => {
    const state = useSelector((state) => {
        return state
    })
    console.log(state);
    const dispatch = useDispatch()
    useEffect(() => {
        getString(true).then((res) => {
            dispatch({ type: "INCREMENT", res })
        });
    }, [])
    return (
        <div className="Overview">
            {/* <CountryChoice /> */}
            <FormattedMessage id="help" />
        </div>
    )
}

export default Overview;