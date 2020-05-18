import React from 'react';
import '../assets/styles/RiskGraphics.css';
import DonutChart from 'react-donut-chart';
import Table from './Table.jsx';

const RiskGraphics = ({selectedRisk = 0,levels = [], labels = []}) => {
    const SelectedRiskLevel = levels.filter(item => item.Risk === selectedRisk)[0] || {}
    const dataChartRisk = Object.entries(SelectedRiskLevel).filter(item => item[0] !== 'Risk').map( item => {
        const data = {};
        data.label = item[0];
        data.value = item[1];
        return data;
    })
    const handleChangeGraph = () =>{
        let tableContainer = document.querySelector('.risk-graphics-container table');
        let donutChartContainer = document.querySelector('.risk-graphics-container svg');
        tableContainer.style.display = tableContainer.style.display === "none" ? "table" : "none";
        donutChartContainer.style.display = tableContainer.style.display === "none" ? "block" : "none";
    }
    return (
        <div className="risk-graphics-container">
        {selectedRisk > 0 && 
            <button onClick={handleChangeGraph}>Change Graph</button>
        }
        {(selectedRisk > 0) &&
            <DonutChart data={dataChartRisk} width={450} height={300}/>
        }
            <Table labels={labels} levels={levels} selectedRisk={selectedRisk} coloredRow/>
        </div>
    )
}
export default RiskGraphics;