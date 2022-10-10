import React from 'react';

class login extends React.Component{

    // constructor(){
    //     super();
        state={
            id: '',
            password: ''
        }
    

    onSub = (event) =>{
        event.preventDefault();
    }

    isOK = () =>{
        if(this.state.password.length<6||this.state.id===''||this.state.password===''){
            alert("please enter proper details");
            return false;
        }
        return true;
    }

    onClickLogin = () =>{
        this.props.asign('Machine');
    }

    render(){
        return(
            <div>
                <div className='bg1'></div>
                <div className="circle" style={{'right': '-800px','top': '-200px'}}></div>
                <div className="circle" style={{'top':'-400px','right':'-700px'}}></div>
                <form onSubmit={this.onSub}>
                    <h1>Login</h1>

                    <div>Enter your maid id:</div>
                    <input type='mail' required value={this.state.id} placeholder='ex: john@gmail.com' onChange={(event)=>this.setState({id: event.target.value})}  />
                    
                    <div>Enter your password:</div>
                    <input type='password' required value={this.state.password} minLength="6" placeholder='********' onChange={(event)=>this.setState({password: event.target.value})}/>
                    
                    <div>
                        <input type='button'  className='inButton' value='Log In' onClick={this.onClickLogin}/>
                    </div>

                    <div>
                        <span>
                            Don't have an account?
                        </span>
                    </div>
                    <div>
                     <span><a href="#" onClick={()=>this.props.asign('Signup')}>Create one here</a></span>
                    </div>
                </form>
            </div>
        )
    }
}

export default login;