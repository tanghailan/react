import React,{ Component,Fragment } from "react";

class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['基础按摩','精油推背']
        }
    }
    render(){
        return (
            // <div>
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addService.bind(this)}>增加服务</button>
                </div>
                <ul>
                   {
                       this.state.list.map((item,index)=>{
                            return <li key={index+item} onClick={this.deleteItem.bind(this,index)}>{item}</li>
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