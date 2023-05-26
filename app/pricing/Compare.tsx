import React from 'react';
import "./styles/Compare.css";

const tableData = [
    {
        feature: "UNLIMITED STORY POSTING",
        basic: true,
        pro: true,
        business: true,
    },
    {
        feature: "UNLIMITED PHOTO UPLOAD",
        basic: true,
        pro: true,
        business: true,
    },
    {
        feature: "EMBEDDING CUSTOM CONTENT",
        basic: false,
        pro: true,
        business: true,
    },
    {
        feature: "CUSTOMIZE METADATA",
        basic: false,
        pro: true,
        business: true,
    },
    {
        feature: "ADVANCED METRICS",
        basic: false,
        pro: false,
        business: true,
    },
    {
        feature: "PHOTO DOWNLOADS",
        basic: false,
        pro: false,
        business: true,
    },
    {
        feature: "SEARCH ENGINE INDEXING",
        basic: false,
        pro: false,
        business: true,
    },
    {
        feature: "CUSTOM ANALYTICS",
        basic: false,
        pro: false,
        business: true,
    },
]

const Compare = () => {
  return (
    <section className="
        flex
        flex-col
        justify-center
        items-center
        mb-[160px]
    ">
        <h1 className="mb-14 text-xxl">
            COMPARE
        </h1>
        <table>
            <thead>
                <tr>
                    <th className="text-start pl-[24px] w-[320px]">
                        THE FEATURES
                    </th>
                    <th>BASIC</th>
                    <th>PRO</th>
                    <th>BUSINESS</th>
                </tr>
            </thead>

            <tbody className="text-center">
                {tableData.map((data) => (
                    <tr>
                        <td className="
                            font-bold
                            text-start
                            tracking-[2px]
                            pl-[24px]
                            py-[24px]
                        ">
                            {data.feature}
                        </td>
                        <td>
                            {data.basic ? <div id="tick-mark"/> : ""}
                        </td>
                        <td>
                            {data.pro ? <div id="tick-mark"/> : ""}
                        </td>
                        <td>
                            {data.business ? <div id="tick-mark"/> : ""}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
  )
}

export default Compare