import React from 'react';


const Table = (props) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="border border-emerald-950 min-w-[700px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {props?.columns && props?.columns.map((head, index) => (
                            <th key={index} scope="col" className="border border-emerald-950 px-6 py-3" style={{ width: head.width }}>
                                {head.headerName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props?.rows?.map((item, rowIndex) => (
                        <tr key={rowIndex} className="bg-white dark:bg-gray-800">
                            {props.columns.map((column, colIndex) => (
                                <td key={colIndex} className="border border-emerald-950 px-6 py-4">
                                    {item[column?.feild]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
