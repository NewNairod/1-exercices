import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './components/home';
// import Contact from './components/contact';
// import Layout from './components/layout';

  class App extends React.Component{
    constructor(props)
{
    super(props);
    this.state = {
        task:''
    }
    this.handleSubmit=this.handleSubmit.bind(this);
}
onChange= e=> {
    this.setState({ [e.target.name] :e.target.value});
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
//function App() {
  // return (
//     <BrowserRouter>
//     <Routes>
// <Route path="/" element={<Layout />}>
// <Route path="home" element={<Home />} />
// <Route path="contact" element={<Contact />} />
// </Route>
// </Routes>
//     </BrowserRouter>
  // );
  // }

export default App
