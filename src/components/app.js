import React from 'react';
import { Component } from 'react';
import BookList from '../containers/book_list';
import InputBook from './input_book';

export default class App extends Component {
  render() {
    return (
      <div>
	      <InputBook onClickSave={this.props.onDispatchAction} />
	      <BookList />
      </div>
    );
  }
}
