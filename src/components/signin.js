import React from 'react';

class signin extends React.Component{
    state={
            nPass:'',
            cPass:'',
            gender: 'Male',
            mail: '',
            name: '',
            dob: ''
    }

    onSub = (event) =>{
        event.preventDefault();
    }

    isEmpty = ()=>{
        //var states=this.state;
        if(this.state.name==''||this.state.mail==''||this.state.cPass==''||this.state.nPass==''||this.state.dob==''){
            console.log('complete all the fields');
            return false;
        }
        if(this.state.cPass.length<6)
            return false;
        if(this.state.nPass!=this.state.cPass){
            alert("password mismatched!");
            return false;
        }
        console.log('proper, signing in');
        return true;
    }

    onClickSubmit=()=>{
        this.props.asign('Login');
    }

    render(){
        return(
            <div style={{'position': 'relative'}}>
                
                <div className="circle" style={{'left': '-850px','top': '-200px'}}></div>
                <div className="circle" style={{'top':'300px','right':'-870px'}}></div>
                <form onSubmit={this.onSub}>
                <h1>Sign Up</h1>

                <div>Enter your maid id:</div>
                <input type='mail' placeholder='ex: john@gmail.com' value={this.state.mail} required onChange={(event)=>this.setState({mail: event.target.value})}/>
                
                <div>Enter new password:</div>
                <input type='password' minLength='6' value={this.state.nPass} required placeholder='********' onChange={(event)=>this.setState({nPass:event.target.value})}/>
                
                <div>Confirm your password:</div>
                <input type='password' minLength='6' value={this.state.cPass} required placeholder='********' onChange={(event)=>this.setState({cPass:event.target.value})}/>
                
                <div>Name:</div>
                <input placeholder='name' required value={this.state.name} onChange={(event)=>this.setState({name: event.target.value})}/>
                
                <div>Enter your DOB:</div>
                <input type='date' required value={this.state.dob} max={new Date().toISOString().split("T")[0]} onChange={(event)=>this.setState({dob: event.target.value})}/>
                
                <div>Gender</div>
                <select  onChange={(event)=>this.setState({gender: event.target.value})}>
                    <option defaultChecked value="Male">Male</option>
                    <option value='Female'>Female</option>
                </select>
                
                <div>
                    <input type="submit" className='inButton' onClick={()=>{if(this.isEmpty()) this.onClickSubmit()}}/>
                </div>
            </form></div>
        )
    }
}

export default signin;