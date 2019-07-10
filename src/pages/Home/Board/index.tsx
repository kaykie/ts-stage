import React from 'react';
import "./index.less";
import store from "../../../store/store";
import { observer, inject } from 'mobx-react';

@inject("store")
@observer
class Board extends React.Component<{ enterpriseStore: store }> {
  constructor(props: { enterpriseStore: store }) {
    super(props);
  }

  render() {
    return (
      <div className="mf-home-board">
        1111
      </div>
    );
  }
}

export default Board;
