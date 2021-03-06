import React from 'react';
import logo from './logo.svg';
import './App.css';

  interface IData {
    id: string;
    name: string;
    email: string;
  }

  interface IAppState {
    showTable: boolean;
  }

  interface IAppProps {
    data: IData[]
  }

  class App extends React.Component<IAppProps, IAppState> {
    public renderTable() {};
    public toggleShowTable = () => {
    
      const{ showTable } = this.state;
      this.setState({showTable: !showTable});
    };
 
 public render() {
   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.renderTable()}
        <button onClick={this.toggleShowTable}>test</button>
      </header>
      <button onClick={this.toggleShowTable}>test</button>
    </div>
  );
};
  };


export default App;
