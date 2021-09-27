import { TreeSelect } from "antd";
import { continentlist } from "../../../assets/staticData/result_format"
const { SHOW_PARENT } = TreeSelect;

const CountryChoice = ({ setActiveData, activeData }: { setActiveData: (data: any[]) => void, activeData: any[] }) => {
    // const [language, setLanguage] = useState("CN")
    // const initData: (data: any[]) => any = (data: any[]) => {
    //     return data.map((d: any) => {
    //         return {
    //             ...d,
    //             title: language === "CN" ? d.cname : d.name,
    //             value: d.code,
    //             key: d.code,
    //             children: d.country ? initData(d.country) : []
    //         }
    //     });
    // }
    // const initContinent: (data: any[], { code, value }?: { code: string, value: string }) => any = (data: any[], { code, value }: { code: string, value: string }) => {
    //     if (code && code !== "CN" && code !== "US") return
    //     return data.map((d: any) => {
    //         return {
    //             ...d,
    //             title: d.name,
    //             value: code ? `${code}-${d.name}` : d.name,
    //             key: code ? `${code}-${d.name}` : d.name,
    //             children: d.countrylist ? initContinent(d.countrylist) : d.regionlist ? initContinent(d.regionlist, { code: d.code, value: d.value }) : []
    //         }
    //     });
    // }

    const initContinent: (data: any, { countryCode, countryName }: {
        countryCode?: string;
        countryName?: string;
    }) => any = (data: [], { countryCode, countryName }: {
        countryCode?: string;
        countryName?: string;
    }) => {
            if (countryCode && countryCode !== "CN" && countryCode !== "US") return
            return data.map((d: any) => {
                return {
                    ...d,
                    title: d.name,
                    value: countryCode ? `${countryCode}-${d.name}` : d.name,
                    key: countryCode ? `${countryCode}-${d.name}` : d.name,
                    ...{ countryName },
                    children: d.countrylist ? initContinent(d.countrylist, {}) : d.regionlist ? initContinent(d.regionlist, { countryCode: d.code, countryName: d.name }) : []
                }
            });
        }
    const treeOnChange = (value: any[]) => {
        if (value.length < activeData.length) {
            setActiveData(activeData.filter((a: any) => {
                return value.find((v: any) => {
                    return v.value === a.value
                })
            }))
        }
    }
    const treeOnSelect = (value: string, option: any) => {
        setActiveData([...activeData, { name: option.name, value: option.value, countryName: option.countryName, level: option.countrylist ? "continent" : option.regionlist ? "country" : "region" }])
    }
    const tProps = {
        // treeData: initData(region),
        treeData: initContinent(continentlist, {}),
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        treeCheckStrictly: true,
        placeholder: 'Please select',
        allowClear: true,
        style: {
            width: '30%',
            marginRight: "16px"
        },
        maxTagCount: 0,
        maxTagPlaceholder: () => activeData.length ? <p>已选择{activeData.length}项</p> : "",
        onChange: treeOnChange,
        onSelect: treeOnSelect,
    };
    return (
        <>
            <TreeSelect {...tProps} />
        </>

    )
}
export default CountryChoice