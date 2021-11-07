import React, { Component } from "react";
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Title from "../../components/title";
import Origamis from "../../components/origamis";
import UserContext from "../../Context";

class Publications extends Component {
  static contextType = UserContext;

  render() {
    console.log(this.context);
    return (
      <PageLayout>
        <Title title="Publications" />
        <div className={styles["origamis-wrapper"]}>
          <Origamis />
        </div>
      </PageLayout>
    );
  };
}

export default Publications;
