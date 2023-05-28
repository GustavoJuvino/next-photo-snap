import React from 'react';
import "./styles/Compare.css";

const tableData = [
    {
        feature: "UNLIMITED STORY POSTING",
        plans: [ "BASIC", "PRO", "BUSINESS"]
    },
    {
        feature: "UNLIMITED PHOTO UPLOAD",
        plans: [ "BASIC", "PRO", "BUSINESS"]
    },
    {
        feature: "EMBEDDING CUSTOM CONTENT",
        plans: [ "", "PRO", "BUSINESS"]
    },
    {
        feature: "CUSTOMIZE METADATA",
        plans: [ "", "PRO", "BUSINESS"]
    },
    {
        feature: "ADVANCED METRICS",
        plans: [ "", "", "BUSINESS"]
    },
    {
        feature: "PHOTO DOWNLOADS",
        plans: [ "", "", "BUSINESS"]
    },
    {
        feature: "SEARCH ENGINE INDEXING",
        plans: [ "", "", "BUSINESS"]
    },
    {
        feature: "CUSTOM ANALYTICS",
        plans: [ "", "", "BUSINESS"]
    },
]

const featuresPlans = ["BASIC", "PRO", "BUSINESS"]

const Compare = () => {
  return (
    <section 
        className="
            flex
            flex-col
            justify-center
            items-center
            mb-[160px]
        "
    >
        <h1 className="mb-14 text-xxl">
            COMPARE
        </h1>
        <table className="sm:mx-8 mx-2">
            <thead>
                <tr>
                    <th className="text-start md:pl-[24px] w-[320px]">
                        THE FEATURES
                    </th>
                    {featuresPlans.map((plan) => (
                        <th className="max-md:hidden">{plan}</th> 
                    ))}
                </tr>
            </thead>

            <tbody className="text-center">
                {tableData.map((data) => (
                    <tr className="">
                        <td className="
                                font-bold
                                text-start
                                tracking-[2px]
                                md:pl-[24px]
                                py-[24px]
                                max-md:pb-8
                            "
                        >
                            {data.feature}
                            <div className="
                                    md:hidden
                                    flex
                                    justify-between
                                    pt-4
                                    text-opacity-50
                                    text-black
                                    text-sm
                                "
                            >
                                {featuresPlans.map((plan) => (
                                    <div 
                                        key={plan}
                                        className="flex flex-col"
                                    >
                                        <p>{plan}</p>
                                        {data.plans?.map((data_plan) => (
                                            data_plan === plan ? <div key={data_plan} id="tick-mark"/> : "" 
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </td>

                        {data.plans?.map((data_plan) => (
                            <td className="max-md:hidden">
                                {data_plan ? <div id="tick-mark"/> : ""} 
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
  )
}

export default Compare;