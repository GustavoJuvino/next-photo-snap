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

const typeFeatures = ["BASIC, PRO, BUSINESS"]

const Compare = () => {
  return (
    <section className="
        flex
        flex-col
        justify-center
        items-center
        mb-[160px]
        max-lg:px-[20px]
    ">
        <h1 className="mb-14 text-xxl">
            COMPARE
        </h1>
        <table>
            <thead>
                <tr>
                    <th className="text-start md:pl-[24px] w-[320px]">
                        THE FEATURES
                    </th>
                    {/* <th>BASIC</th>
                    <th>PRO</th>
                    <th>BUSINESS</th> */}
                </tr>
            </thead>

            <tbody className="text-center">
                {tableData.map((data) => (
                    <tr>
                        <td className="
                            font-bold
                            text-start
                            tracking-[2px]
                            py-[24px]
                            md:pl-[24px]
                            max-md:pb-8
                        ">
                            {data.feature}
                            <div className="flex flex-col justify-between">
                                <div className="
                                    flex
                                    justify-between
                                    max-md:mt-[16px]
                                    max-md:mb-2
                                    text-opacity-50
                                    text-black
                                    text-sm
                                ">
                                    <p>BASIC</p>
                                    <p>PRO</p>
                                    <p>BUSINESS</p>
                                </div>

                                <div className="grid grid-cols-3 gap-16">
                                    <div>
                                        {data.basic ? <div id="tick-mark"/> : ""}
                                    </div>
                                    <div>
                                        {data.pro ? <div id="tick-mark"/> : ""}
                                    </div>
                                    <div>
                                        {data.business ? <div id="tick-mark"/> : ""}
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
  )
}

export default Compare