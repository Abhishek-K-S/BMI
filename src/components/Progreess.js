import  React from 'react';

// class dProgress extends React.Component{
//     render(){
//         console.log("d");
//         return(
//             <div className="dummyp"></div>
//         )
//     }
// }

class Progress extends React.Component{
    render(){
        return(
            <div className='center break'>
                <div className='progImg'></div>
                <div className="circle" style={{'right': '-150px','top': '450px', 'opacity': '0.7'}}></div>
                <div className='center break card'>
                        <div className='divider boldd'>
                            Your current BMI
                        </div>
                        <span><h1>23</h1></span>
                    </div>
                <div className='center'>
                    <div className='card break center'>
                        <div className='divider boldd'>
                            Condition
                        </div>
                        <span><h1>GOOD.</h1></span>
                    </div>
                    <div className='card break center'>
                        <div className='divider boldd'>
                            Height
                        </div>
                        <span><h1>161CM</h1></span>
                    </div>
                    <div className='card break center'>
                        <div className='divider boldd'>
                            Weight
                        </div>
                        <span><h1>49KG</h1></span>
                    </div>
                </div>
                <div className='divider boldd'></div>
                <div>
                    <h1>Excercise and Food suggestions:</h1>
                    Lorem ipsum dolor sit amet, vel no nisl nonumes. Definiebas scriptorem vis ne, veri sale zril nam eu. Novum debet scaevola mei ad, eros oratio incorrupte cu vix. Et discere intellegebat sit, est ei fabulas facilisis maiestatis.

                    Te eam sapientem dignissim rationibus. Vis affert dolore aliquando et, feugiat gloriatur ea usu. Id debet soleat reprimique eum, quo diam recteque evertitur ea. Usu movet partem nostrum ei, has copiosae principes in, eam ad etiam adolescens. Iudico habemus salutandi vel cu, quo partem nominavi ne.

                    Omnis constituam concludaturque vel ut, usu quaeque verterem oportere no. Ei bonorum albucius probatus duo, eam falli aperiri postulant an, in vis euismod rationibus. Pro et liber semper percipit. Mea te novum primis, ad duo alii malorum cotidieque, at suas vide quo.

                </div>
            </div>
        )
    }
}

export default Progress;