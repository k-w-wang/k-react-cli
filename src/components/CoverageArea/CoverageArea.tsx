import { Button, Card, Collapse } from "antd"
import _ from "lodash";
import { useState } from "react";
import CountryChoice from "../Shard/CountryChoice"
import "./coveragearea.less"
const { Panel } = Collapse;
const CoverageArea = () => {
    const [activeData, setActiveData] = useState<any[]>([])
    return (
        <div className="coveragearea">
            <CountryChoice activeData={activeData} setActiveData={setActiveData} />
            <Collapse defaultActiveKey={['1', '2', '3']}>
                <Panel header="洲" key="1">
                    {activeData.map((a: any) => {
                        if (a.level === "continent") {
                            return (
                                <Button key={a.value} type="default">{a.name}</Button>
                            )
                        }
                    })}
                </Panel>
                <Panel header="国家或地区" key="2">
                    {activeData.map((a: any) => {
                        if (a.level === "country") {
                            return (
                                <Button key={a.value} type="default">{a.name}</Button>
                            )
                        }
                    })}
                </Panel>
                {/* <Panel header="地区" key="3">
                    <Collapse>
                        {_.keys(_.groupBy(activeData, "countryName")).map((t) => {
                            if (t !== "undefined") {
                                return <Panel header={t} key="1">
                                    {activeData.map((a) => {
                                        if (a.countryName === t) {
                                            return <Button key={a.value} type="default">{a.name}</Button>
                                        }
                                    })}
                                </Panel>
                            }
                        })}
                    </Collapse>

                    {activeData.map((a: any) => {
                        if (a.level === "region") {
                            return (
                                <Button key={a.value} type="default">{a.name}</Button>
                            )
                        }
                    })}
                </Panel> */}
                <Panel header="省市（州）行政区" key="3">
                    {_.keys(_.groupBy(activeData, "countryName")).map((t, index) => {
                        if (t !== "undefined") {
                            return <Card key={index} title={t} size="small">
                                {activeData.map((a) => {
                                    if (a.countryName === t) {
                                        return <Button key={a.value} type="default">{a.name}</Button>
                                    }
                                    return null
                                })}
                            </Card>
                        }
                    })}
                </Panel>
            </Collapse>
        </div>
    )
}
export default CoverageArea