import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';

/* COLOR TYPER */

class ColorTyper extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            color: "pink"
        };
    }
    
    chooseColor(){
        if(this.state.color === "pink") {
            this.setState({
                color: "yellow"
            });
        } else {
            this.setState({
                color: "pink"
            });
        }
    }
    
    changeColor(e){
        this.setState({
            color: e.target.value
        })
    }
    
    render() {
        const colorObj = {
            backgroundColor: this.state.color
        }; 
    
    return(
        <div id="bigdiv">
        
        <div className="content">
        Try typing in a color!
        </div>
        <br />
        <section style={colorObj} id="my-section">
            <br />
            <h2>{this.state.color}</h2>
            <input value={this.state.color} onChange={this.changeColor.bind(this)}/>
                <br />
                <br />
                <br />
         </section>
        </div>
    );
  }
}

/* COLOR SELECTOR */

class ColorSelector extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            color: "pink"
        };
    }
    
    blueClick() {
        this.setState({
          color: "blue"
        })
    }
    
    greenClick() {
        this.setState({
          color: "green"
        })
    }
    
    yellowClick() {
        this.setState({
          color: "yellow"
        })
    }
    
    redClick() {
        this.setState({
          color: "red"
        })
    }
    
    purpleClick() {
        this.setState({
          color: "purple"
        })
    }
    
    changeColor(e){
        this.setState({
            color: e.target.value
        })
    }
    
    render() {
        const colorObj = {
            backgroundColor: this.state.color
        }; 
    
    return(
    <div id="bigdiv">
        
        <div className="content">
        Try selecting a color!
        </div>
        <br />
        <section style={colorObj} id="my-section">
<br />
            <h2>{this.state.color}</h2>
<br />
            <div class="colordiv" id="blue" onClick={this.blueClick.bind(this)} >
            Blue
            </div>
<br />
            <div class="colordiv" id="green" onClick={this.greenClick.bind(this)}>
            Green
            </div>
<br />
            <div class="colordiv" id="yellow" onClick={this.yellowClick.bind(this)}>
            Yellow
            </div>
<br />
            <div class="colordiv" id="red" onClick={this.redClick.bind(this)}>
            Red
            </div>
<br />
            <div class="colordiv" id="purple" onClick={this.purpleClick.bind(this)}>
            Purple
            </div>
                <br />
                <br />
                <br />
         </section>
</div>
    );
  }
    
    
}


/* NAVIGATION */

    const Nav = () => (
    <Router>
        <div>
          <ul className="navbar">
            <li>
               <Link to="/">App</Link>
            </li>
            <li>
            <Link to="/code">Code</Link>
            </li>
        </ul>

         <br />

          <Route exact path="/" component={App}/>
          <Route path="/code" component={Code}/>

        </div>
    </Router>

    );

    const App = () => (
      <div className="display">
        <h2>Michael's Wonderful Color App</h2>
        <ColorTyper />
    <br />
    <ColorSelector />
      </div>
    );

    const Code = () => (
      <div className="display">
        <h2>This is my code!</h2>
        <br />
        <h3>Color Typer</h3>
        <pre id="one">{`
 /* COLOR TYPER */

class ColorTyper extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            color: "pink"
        };
    }
    
    chooseColor(){
        if(this.state.color === "pink") {
            this.setState({
                color: "yellow"
            });
        } else {
            this.setState({
                color: "pink"
            });
        }
    }
    
    changeColor(e){
        this.setState({
            color: e.target.value
        })
    }
    
    render() {
        const colorObj = {
            backgroundColor: this.state.color
        }; 
    
    return(
        <div id="bigdiv">
        
        <div className="content">
        Try typing in a color!
        </div>
        <br />
        <section style={colorObj} id="my-section">
            <br />
            <h2>{this.state.color}</h2>
            <input value={this.state.color} onChange={this.changeColor.bind(this)}/>
                <br />
                <br />
                <br />
         </section>
        </div>
    );
  }
}

`       }</pre>
        <br />
        <h3>Color Selector</h3>
        <pre id="two">{`
 /* COLOR SELECTOR */

class ColorSelector extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            color: "pink"
        };
    }
    
    blueClick() {
        this.setState({
          color: "blue"
        })
    }
    
    greenClick() {
        this.setState({
          color: "green"
        })
    }
    
    yellowClick() {
        this.setState({
          color: "yellow"
        })
    }
    
    redClick() {
        this.setState({
          color: "red"
        })
    }
    
    purpleClick() {
        this.setState({
          color: "purple"
        })
    }
    
    changeColor(e){
        this.setState({
            color: e.target.value
        })
    }
    
    render() {
        const colorObj = {
            backgroundColor: this.state.color
        }; 
    
    return(
    <div id="bigdiv">
        
        <div className="content">
        Try selecting a color!
        </div>
        <br />
        <section style={colorObj} id="my-section2">
<br />
            <h2>{this.state.color}</h2>
<br />
            <div class="colordiv" id="blue" onClick={this.blueClick.bind(this)} >
            Blue
            </div>
<br />
            <div class="colordiv" id="green" onClick={this.greenClick.bind(this)}>
            Green
            </div>
<br />
            <div class="colordiv" id="yellow" onClick={this.yellowClick.bind(this)}>
            Yellow
            </div>
<br />
            <div class="colordiv" id="red" onClick={this.redClick.bind(this)}>
            Red
            </div>
<br />
            <div class="colordiv" id="purple" onClick={this.purpleClick.bind(this)}>
            Purple
            </div>
                <br />
                <br />
                <br />
         </section>
</div>
    );
  }
    
    
}
`       }</pre>
      </div>
    );

  
    const Navigation = () => (
        <div>
            <Nav/>
        </div>
    );
    

/* RENDER */

let renderOutput = (
  <div>
    <Router>
      <Navigation />
    </Router>
    <br />
  </div>
);

ReactDOM.render(
     renderOutput, 

document.getElementById('root'));