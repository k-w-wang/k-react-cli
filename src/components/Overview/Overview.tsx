import { FormattedMessage } from "react-intl"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
const Overview = (props: any) => {
    const state = useSelector((state) => {
        return state
    })
    return (
        <div className="Overview">
            {/* <CountryChoice /> */}
            <FormattedMessage id="help" />
        </div>
    )
}

export default Overview;