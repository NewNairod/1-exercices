import React from 'react';
export default class Home extends React.Component{
    constructor(props)
{
    super(props);
    this.state = {
        task:'',
    }
    this.handleSubmit=this.handleSubmit.bind(this);
}
onChange= e=> {
    this.setState({ [e.target.task] :e.target.value});
};
handleSubmit(event)
{
    
    event.preventDefault();
}
render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
               <input type="text" value={this.state.task} onChange={this.onChange} name="task"></input>
                <button type="submit" >Ajouter tâche</button>
            </form>
        </div>);
}
}