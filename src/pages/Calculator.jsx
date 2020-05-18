import React from 'react';
import '../assets/styles/Calculator.css';
import { connect } from 'react-redux';
import { setPortfolioRisk } from '../actions';
import Table from '../components/Table.jsx';

class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.selectedRisk = this.props.risk.selectedRisk;
        this.portfolioRisk = this.props.risk.portfolioRisk;
        this.labels = this.props.risk.labels.filter(item => item !== 'Risk');
        this.levels = this.props.risk.levels.filter(item => item.Risk === this.selectedRisk) || [];
    }
    initializeCurrentInputs = () => {
        const currentInputs = [...document.querySelectorAll('.calculator-input-current')];
        if(this.portfolioRisk.length > 0){
            currentInputs.forEach( (item,index) => {
                item.value = this.portfolioRisk[index];
            });
        }
    }
    validateNoEmptyInput = () => {
        let emptyInputs = true;
        let rebalanceBtn = document.querySelector('.rebalance-btn');
        const currentInputs = [...document.querySelectorAll('.calculator-input-current')];
        emptyInputs = currentInputs.filter(item => item.value === '').length > 0;
        rebalanceBtn.disabled = emptyInputs || this.selectedRisk === 0;
    }
    getMinimalTransfers = () => {
        let tranfersContainer = document.querySelector('.calculator-transfers');
        let differenceInputs = [...document.querySelectorAll('.calculator-input-difference')].map(item => Number(item.value));
        tranfersContainer.innerHTML = '';
        while(differenceInputs.filter(item => item !== 0).length > 1){
            let minValue = Math.min(...differenceInputs);
            let maxValue = Math.max(...differenceInputs);
            let minIndex = differenceInputs.indexOf(minValue);
            let maxIndex = differenceInputs.indexOf(maxValue);
            let difference = Math.round(100 * (maxValue + minValue))/100;
            if(difference < 0){
                tranfersContainer.innerHTML += `<div>• Transfer ${differenceInputs[maxIndex]} from ${this.labels[minIndex]} to ${this.labels[maxIndex]}.</div>`
                differenceInputs[minIndex] = difference;
                differenceInputs[maxIndex] = 0;
            }
            else{
                tranfersContainer.innerHTML += `<div>• Transfer ${(differenceInputs[minIndex] * -1)} from ${this.labels[minIndex]} to ${this.labels[maxIndex]}.</div>`
                differenceInputs[maxIndex] = difference;
                differenceInputs[minIndex] = 0;
            }
        }
    }
    handleChangeInput = event => {
        this.validateNoEmptyInput();
    }
    handleRebalance = () => {
        const currentInputs = [...document.querySelectorAll('.calculator-input-current')];
        const newInputs = [...document.querySelectorAll('.calculator-input-new')];
        const differenceInputs = [...document.querySelectorAll('.calculator-input-difference')];
        const selectedLevelValues = this.levels.length? Object.values(this.levels[0]) : [];
        let portfolioSum = currentInputs.reduce((accumulator, item) => accumulator + Number(item.value),0) * 1.0;
        
        newInputs.forEach( (item,index) => {
            item.value = portfolioSum * selectedLevelValues[index+1]/100;
        });

        differenceInputs.forEach( (item,index) => {
            let differenceValue = Math.round(100 * (newInputs[index].value - currentInputs[index].value))/100;
            item.value = differenceValue > 0 ? '+'+differenceValue : differenceValue;
            item.style.color = item.value < 0 ? "red" : "green";
        });

        this.getMinimalTransfers();
        this.props.setPortfolioRisk(currentInputs.map((item) => item.value))
    }
    componentDidMount = () => {
        this.initializeCurrentInputs();
        this.validateNoEmptyInput();
    }
    render(){
        return (
            <main>
                <div className="calculator-container">
                    <h2 className="calculator-title">Personalized Portfolio</h2>
                    <span className="calculator-risk-level-span">Risk Level {this.selectedRisk}</span>
                    <Table labels={this.props.risk.labels} levels={this.levels} selectedRisk={this.selectedRisk}/>
                    <div className="calculator-input-header-container">
                        <span>Please Enter Your Current Portfolio</span>
                        <button className="rebalance-btn" onClick={this.handleRebalance}>Rebalance</button>
                    </div>
                    <div className="calculator-input-container">
                        <div className="calculator-input-labels">
                            <label>Current Amount</label>
                            <label>Difference</label>
                            <label>New Amount</label>
                            <label>Recommended Transfers</label>
                        </div>
                        <div className="calculator-input-rows">
                            {
                                this.labels.map(item => {
                                    return (
                                    <div key={item} className="calculator-input-row">
                                        <div className="calculator-current-container">
                                            <label className="calculator-input-current-label">{item} $:</label>
                                            <input className="calculator-input-current" name={item} onKeyUp={this.handleChangeInput} autoComplete="new-password"/>
                                        </div>
                                        <input className="calculator-input-difference" type="text" disabled />
                                        <input className="calculator-input-new" type="text" disabled />
                                    </div>)
                                })
                            }
                        </div>
                        <div className="calculator-transfers"></div>
                    </div>
                </div>
            </main>
        )
    }
}
const mapStateToProps = state => {
    return {
        risk : state.risk,
    }
}
const mapDispatchToProps = {
    setPortfolioRisk
}
export default connect(mapStateToProps,mapDispatchToProps)(Calculator)