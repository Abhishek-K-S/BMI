
const delay=(props)=>{
    return(
        <div onClick={()=>props.asign('Progress')} className='center break'>
            <div><h1>THE MACHINE IS READY TO BE USED</h1></div>
            <div>Please remove your shoes before using the machine</div>
            <div>Make sure that you are not carrying anything heavy</div>
        </div>
    )
}

export default delay;