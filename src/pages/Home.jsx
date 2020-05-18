import React from 'react';
import '../assets/styles/Home.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedRisk } from '../actions';
import RiskGraphics from '../components/RiskGraphics.jsx';

class Home extends React.Component{
    handleSelectRisk = event => {
        this.props.setSelectedRisk(event.target.value);
    }
    render(){
        return (
            <main>
                <div className="home-container">
                    <h3>Please Select a Risk Level For Your Investment Portfolio</h3>
                    <div className="risk-options-spans">
                        <span>Low</span>
                        <span>High</span>
                    </div>
                    <div className="risk-options-container">
                        <ul>
                        {this.props.risk.levels.map( item => 
                            <li key={item.Risk} 
                                className={item.Risk === this.props.risk.selectedRisk?'selected-risk':null} 
                                value={item.Risk} 
                                onClick={this.handleSelectRisk}>
                            {item.Risk}</li>
                        )}
                        </ul>
                        {this.props.risk.selectedRisk !==0 && 
                            <Link to='/calculator'>Continue</Link>
                        }
                    </div>
                    <RiskGraphics {...this.props.risk}/>
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
    setSelectedRisk
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)