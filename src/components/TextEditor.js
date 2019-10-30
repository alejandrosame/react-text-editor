import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

// Create our initial value...

const initialValue = Value.fromJSON({
  document:{
    nodes:[
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'My first paragraph',
              },
            ],
          },
        ],
      },
    ],
  },
})

export default class TextEditor extends Component {

    state = {
        value: initialValue,
    }

    // On change, update the app's React state with the new editor value
    onChange = ({ value }) => {
        this.setState({ value })
    }

    render() {
        return(
            <Editor value={this.state.value} onChange={this.onChange} />
        )
    }
}