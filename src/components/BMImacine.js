import React from 'react';

class BMImachine extends React.Component{
    render(){

        return(
            <div>
                <div>
                    <div className="card center break">
                        <div className="circle" style={{'right': '-850px','top': '-200px'}}></div>
                        <div className="circle" style={{'top':'250px','left':'-800px'}}></div>
                        <div style={{'marginBottom': '10px'}}>Enter the OTP here: </div>
                        <input type='number' maxLength='4' minLength='4' style={{'textAlign': 'center','fontSize':'30','fontWeight':'bolder'}}/>
                        <div className='divider center'>Click below to Link with BMI machine</div>
                        <input type='button' value='Link and get result!!' className='inButton' onClick={()=>this.props.asign("Delay")}/>
                    </div>
                </div>
                <div className="card center">
                    <input type="button" className='inButton' value='Manually enter Height and Weight' onClick={()=>this.props.asign('Manual')}/>
                </div>
            </div>
        )
    }
}

export default BMImachine;