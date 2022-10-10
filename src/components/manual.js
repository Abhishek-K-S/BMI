import React from 'react';

class manual extends React.Component{

    onClickBMI = ()=>{
        this.props.asign('Progress');
    }

    render(){
        return(
            <div>
                <div className='bgManual'></div>
                <div className='card center break' style={{'position':'relative','left':'120%'}}>
                <div className="circle" style={{'top':'35%','right':'-550px'}}></div>
                <div className="circle" style={{'top':'-100px','left':'-1250px'}}></div>
                    <div className='divider'>Enter Height here</div>
                    <input type='number'/>
                    <div className='divider'></div>
                    <div className='divider'>Enter Weight here</div>
                    <input type='number'/>
                    <div className='divider'></div>
                    <input type='button' value='calculate BMI' className='inButton' onClick={this.onClickBMI}/>
                </div>
            </div>
        )
    }
}

export default manual;
