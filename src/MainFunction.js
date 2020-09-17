import React, { Component} from 'react';
import EntryList from './EntryList'

class MainFunction extends Component 
{

    constructor(props) {
        super(props)
        this.state = {

            input: [],
            currentInput: {
                text: "",
                key: ""

            }
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput = e => {
        this.setState({
            currentInput: {
                text: e.target.value,
                key: new Date().toLocaleString()
            }
        })
    }

    handleSubmit = e => {
      e.preventDefault();
      const EnteredValue = this.state.currentInput 
      console.log(EnteredValue)
      if(EnteredValue.text !== ""){
          const newEnteredValue=[...this.state.input, EnteredValue]
          this.setState({
              input: newEnteredValue,
              currentInput: {
                  text: "",
                  key: ""
              }
          })
      }
    }

    sort = () => {
        const { input } = this.state;
        input.sort((a, b) => a.key - b.key).reverse()
        this.setState({ input })
      }

    render()
    {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input  name="input" type="text"  value={this.state.currentInput.text} onChange={this.handleInput} />
                    <button type="submit">Add</button>
                </form>
                <div>
                <button onClick={this.sort}>Toggle</button>
                </div>
                <EntryList input={this.state.input}/>
            </div>
            
        )
        
    }
}

export default MainFunction;