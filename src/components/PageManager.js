import React from 'react';
import Login from './login';
import Manual from './manual'
import Signin from './signin'
import BMImachine from './BMImacine';
import Dashboard from './Dashboard';
import Progress from './Progreess';
import Delay from './delayScreen';

class PageManager extends React.Component{
    state={
        page:'Login'
    }

    asignState = (value)=>{
        this.setState({page: value})
    }

    navbar = ()=>{
        return(
            <div className=' center navButtons'>
                <a onClick={()=>this.setState({page: 'Progress'})}>Progress</a>
                <a onClick={()=>this.setState({page: 'Dashboard'})}>Dashboard</a>
            </div>
        )
    }

    render(){
        if(this.state.page==='Login'){
            return(             
                <div className='card'>

                    <div >
                        <Login asign={this.asignState}/>
                    </div>

                    <div className="divider center"> OR</div>

                    <div >
                        <input type="button" className='inButton' value='Manually enter Height and Weight' onClick={()=>this.setState({page: 'Manual'})}/>
                    </div>

                </div>
            )
        }
        else if(this.state.page==='Signup'){
            return(
                <div className='card'>
                    <div >
                        <Signin asign={this.asignState}/>
                    </div>
                </div>
            )
        }
        else if(this.state.page==='Manual'){
            return(
                <Manual asign={this.asignState}/>
            )
        }
        else{
            
            if(this.state.page==='Machine'){
                return(
                    <div>{this.navbar()}
                        <BMImachine asign={this.asignState}/>
                    </div>
                );
            }
            else if(this.state.page==='Dashboard'){
                return(
                    <div>{this.navbar()}
                        <Dashboard/>
                    </div>
                )
            }
            else if(this.state.page==='Progress'){
                return(
                    <div>{this.navbar()}
                        <Progress/>
                    </div>
                )
            }
            else if(this.state.page==='Delay'){
                return(
                    <div>
                        <Delay asign={this.asignState}/>
                    </div>
                )
            }
        }
    }
}

export default PageManager;