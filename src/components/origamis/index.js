import React, { Component } from "react";
import Origami from "../origami";
import styles from './index.module.css';

class Origamis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origamis: []
    };
  }

  getOrigamis = async () => {
    const promise = await fetch('http://localhost:9999/api/origami');
    const origamis = await promise.json();

    this.setState({
      origamis
    });
  }

  renderOrigamis() {
    const { origamis } = this.state;

    return origamis.map((origami, index) => {
      return (
        <Origami key={origami._id} index={index} {...origami} />
      );
    });
  }

  componentDidMount() {
    this.getOrigamis();
  }

  render() {
    // console.log(this.state.origamis);
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Origamis</h1>
        <div className={styles["origamis-wrapper"]}>
          {this.renderOrigamis()}
        </div>
      </div>
    )
  }
}

export default Origamis;