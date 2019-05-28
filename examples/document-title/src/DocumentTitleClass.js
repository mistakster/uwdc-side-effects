import { Component } from 'react';

class DocumentTitleClass extends Component {
  static setDocumentTitle(title) {
    document.title = `You clicked ${title} times`;
  }

  componentDidMount() {
    document.title = this.props.title;
  }

  componentDidUpdate() {
    document.title = this.props.title;
  }

  componentWillUnmount() {
    document.title = '';
  }

  render() {
    return null;
  }
}

export default DocumentTitleClass;
