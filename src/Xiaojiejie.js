import React,{ Component,Fragment } from "react";
import './style.css'
class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['ServiceA','ServiceB']
        }
    }
    render(){
        return (
            // <div>
            <Fragment>
                {/**注释  */}
                <div>
                    <label htmlFor="add">增加服务:</label>
                    <input id="add" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addService.bind(this)}>增加服务</button>
                </div>
                <ul>
                   {
                       this.state.list.map((item,index)=>{
                            return <li key={index+item} onClick={this.deleteItem.bind(this,index)} dangerouslySetInnerHTML={{__html:item}}></li>
                       })
                   }
                </ul>
            </Fragment>
            // </div>

        )
    }
    inputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    //增加列表
    addService(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }

    //删除列表项
    deleteItem(index){
        console.log(index)
        let list = this.state.list
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
}

export default Xiaojiejie