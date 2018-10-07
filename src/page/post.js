import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {observer,inject,PropTypes as ObservablePropTypes} from 'mobx-react'

@inject('store')
@observer
class App extends Component {
  static propTypes = {
    store:PropTypes.shape({
      add: PropTypes.func,
      queue: ObservablePropTypes.observableArray
    })
  }
  render() {
    console.log(this.props.store.queue)
    return (
      <React.Fragment>
        {this.props.store.queue.length}
        <button onClick={this.props.store.add}>增加</button>
      </React.Fragment>
    )
  }
}

export default App;
