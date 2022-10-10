import React from 'react';
import './style.css'
import PageManager from './PageManager';

class App extends React.Component{

    render(){
        return(
            <div>
                {/* <div className='borderdesign'></div> */}
                
                <div className='navbar'>
                    <div className='relativelycenter'>
                        <h1 className='larger'>Health Bee</h1>
                    </div>
        
                    {/* <a>Progress</a>
                    <a>Dashboard/profile</a> */}

                </div>
                <div className='container'>
                    <PageManager/>
                </div>
                <div>
                    <footer className='center'><h2>STAY HEALTHY</h2></footer>
                </div>
            </div>
        )
    }
}

export default App;