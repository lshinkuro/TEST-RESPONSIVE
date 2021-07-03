import React, { Component } from 'react';
import RichTextEditor from 'react-rte';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Card from './Component/Card';


class App extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    submit: PropTypes.func
  };

  state = {
    value: RichTextEditor.createEmptyValue(),
    text: "",
  }

  onChange = (value) => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  submit = () => {
    console.log("babi")
    this.setState({text:ReactHtmlParser(this.state.value.toString("html"))})
  }

  render() {
    const { editorState } = this.props;
    return (
      <div className="flex justify-center flex-col md:flex-row items-center p-4 md:p-24 gap-2">
        <div className="hidden sm:block">
          <p className="uppercase tracking-wide text-sm text-black text-left font-semibold my-2">Customisation</p>
          <p className=" tracking-wide text-sm text-gray-600 text-left font-sm my-2">The text will reflect mobile view</p>
          <RichTextEditor
            className="md:w-4/12 lg:w-8/12"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button
            className="bg-blue-500 hover:bg-grey text-grey-darkest font-bold py-2 px-4 my-4 rounded-sm inline-flex items-center"
            onClick={this.submit.bind(this)}
          >
            <span className="text-white mr-2 ">Published</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
          </button>
        </div>
        <div>
          <Card text={this.state.text} />
        </div>


      </div>
    );
  }
}

export default App;
