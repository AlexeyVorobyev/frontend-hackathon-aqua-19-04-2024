import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  prop?: string;
  solarmapPointBold?: string;
  prop1?: string;
  solarroutingbold?: string;
  solarrouting2Bold?: string;
  prop2?: string;
  vector?: string;
  solarchefHatHeartBold?: string;
  prop3?: string;
  vector1?: string;

  /** Style props */
  divPadding?: CSSProperties["padding"];
  solarroutingboldIconMinWidth?: CSSProperties["minWidth"];
  vectorIconMinWidth?: CSSProperties["minWidth"];
  solarchefHatHeartBoldIconWidth?: CSSProperties["width"];
  vectorIconFlex?: CSSProperties["flex"];
  vectorIconDisplay?: CSSProperties["display"];
  vectorIconMinWidth1?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  prop,
  solarmapPointBold,
  prop1,
  solarroutingbold,
  solarrouting2Bold,
  prop2,
  vector,
  solarchefHatHeartBold,
  prop3,
  vector1,
  divPadding,
  solarroutingboldIconMinWidth,
  vectorIconMinWidth,
  solarchefHatHeartBoldIconWidth,
  vectorIconFlex,
  vectorIconDisplay,
  vectorIconMinWidth1,
  propPadding,
  propWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: divPadding,
    };
  }, [divPadding]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: solarroutingboldIconMinWidth,
    };
  }, [solarroutingboldIconMinWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: vectorIconMinWidth,
    };
  }, [vectorIconMinWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: solarchefHatHeartBoldIconWidth,
    };
  }, [solarchefHatHeartBoldIconWidth]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      flex: vectorIconFlex,
      display: vectorIconDisplay,
      minWidth: vectorIconMinWidth1,
    };
  }, [vectorIconFlex, vectorIconDisplay, vectorIconMinWidth1]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.parent} style={frameDivStyle}>
      <b className={styles.b} style={bStyle}>
        {prop}
      </b>
      <div className={styles.frameParent}>
        <div className={styles.solarmappointboldParent}>
          <div className={styles.solarmappointbold}>
            <img
              className={styles.solarmapPointBoldIcon}
              loading="lazy"
              alt=""
              src={solarmapPointBold}
            />
            <div className={styles.div} style={divStyle}>
              {prop1}
            </div>
          </div>
         
        </div>
        <div className={styles.frameGroup}>
          <div
            className={styles.solarrouting2BoldParent}
            style={frameDiv1Style}
          >
            <img
              className={styles.solarrouting2BoldIcon}
              loading="lazy"
              alt=""
              src={solarrouting2Bold}
            />
            <div className={styles.div1} style={div1Style}>
              {prop2}
            </div>
          </div>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src={vector}
          />
        </div>
        <div className={styles.frameContainer} style={frameDiv2Style}>
          <div
            className={styles.solarchefHatHeartBoldParent}
            style={frameDiv3Style}
          >
            <img
              className={styles.solarchefHatHeartBoldIcon}
              loading="lazy"
              alt=""
              src={solarchefHatHeartBold}
            />
            <div className={styles.div2}>{prop3}</div>
          </div>
          <img
            className={styles.vectorIcon1}
            loading="lazy"
            alt=""
            src={vector1}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
