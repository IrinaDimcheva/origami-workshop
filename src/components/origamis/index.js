import React, { useCallback, useEffect, useState } from "react";
import Origami from "../origami";
import getOrigami from "../../utils/origami";
import styles from './index.module.css';

const Origamis = (props) => {
  const [origamis, setOrigamis] = useState([]);
  // console.log(origamis.testsr.test)

  const getOrigamis = useCallback(async () => {
    const origamis = await getOrigami(props.length);
    setOrigamis(origamis);
  }, [props.length]);

  const renderOrigamis = () => {
    return origamis.map((origami, index) => {
      return (
        <Origami key={origami._id} index={index} {...origami} />
      );
    });
  }

  useEffect(() => {
    getOrigamis();
  }, [props.updatedOrigami, getOrigamis]);

  return (
    <div className={styles["origamis-wrapper"]}>
      {renderOrigamis()}
    </div>
  );
}

export default Origamis;
