import {Component} from 'react'
import './App.css';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }

  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  render() {
    return (
      <div className="text-editor container">
        <ReactQuill theme="snow"
                    modules={this.modules}
                    formats={this.formats}>
        </ReactQuill>
      </div>
    );
  }
}

export default App;
