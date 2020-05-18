import React from 'react';

const Table = ({labels,levels,selectedRisk,coloredRow}) => {
    return (
        <table>
            <thead>
                <tr>
                {labels.map(item =>
                    <th key={item}>{item} %</th>
                )}    
                </tr>
            </thead>
            <tbody>
            {levels.map( (item) => 
                <tr key={item.Risk} className={item.Risk === selectedRisk && coloredRow?'selected-risk':null}>
                    <td>{item.Risk}</td>
                    <td>{item.Bonds}</td>
                    <td>{item.Large_Cap}</td>
                    <td>{item.Mid_Cap}</td>
                    <td>{item.Foreign}</td>
                    <td>{item.Small_Cap}</td>
                </tr>
                )}
            </tbody>
        </table>
    )
}
export default Table;