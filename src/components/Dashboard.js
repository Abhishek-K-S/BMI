import  React from 'react';
import pic from '../images/bunny2.png'


class Dashboard extends React.Component{
    render(){
        console.log(pic)
        return(
            <div className='center break ref'>
                <div className="circle" style={{'width': '250px', 'height': '250px','top': '400px','right':'-140px'}}></div>
                <div className="circle" style={{'top':'50px','left':'-250px'}}></div>
                <div style={{'position' : 'realtive', 'background': 'red','height': '150px'}}>
                    <div className='circle profPic' style={{'width':'160px', 'height':'160px', 'filter': 'blur(6px)', 'top' : '16%'}}></div>
                    <img src={pic} width='130' height='130' className='makecircle profPic'/>
                </div>
                <div className='smalldivider'></div>

                <div className='center'>
                    <span className='bolder'>Name : </span>
                    <span className='greyish'> anonymous</span>
                </div>

                <div className='smalldivider'></div>

                <div className='center'>
                    <span className='bolder'>Age : </span>
                    <span className='greyish'> 25</span>
                </div>

                <div className='smalldivider'></div>

                <div className='center'>
                    <span className='bolder'>E-mail : </span>
                    <span className='greyish'> anonymous@anonymous.com</span>
                </div>

                <div className='smalldivider'></div>

                <div className='center'>
                    <span className='bolder'>Gender : </span>
                    <span className='greyish'> Male</span>
                </div>

                <div className='smalldivider'></div>

                <div className='center'>
                    <span className='bolder'>BMI (According to the last update) : </span>
                    <span className='greyish'> 23</span>
                </div>

                <div className='smalldivider'></div>

                <div className='center'>
                    <span className='bolder'>Health Condition (According to the last update) : </span>
                    <span className='greyish'> Good..</span>
                </div>
            </div>
        )
    }
}

export default Dashboard;