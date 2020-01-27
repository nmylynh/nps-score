import React, { useEffect, useState } from "react";
import {
  updatePromoters,
  updatePassives,
  updateDetractors,
  toggleClear
} from "../actions";
import { connect } from "react-redux";
import Card from "./card";

function Row(props) {

  let [reset, setReset] = useState(false)

  let {
    row,
    header,
    body,
    totalPromoters,
    totalPassives,
    totalDetractors,
    calculate,
    clear
  } = props;

  // clears when reset is changed
  useEffect(() => {
      props.toggleClear(reset)
  }, [reset])


  // ***CONDITIONAL ELEMENTS***

  // element to count responses and sum the totals
  const countAndGroup = (
    <>
      <Card
        start={10}
        end={9}
        type="promoters"
        calculate={calculate}
        action={props.updatePromoters}
        totalPromoters={totalPromoters}
        clear={clear}
      />

      <Card
        start={8}
        end={7}
        type="passives"
        calculate={calculate}
        action={props.updatePassives}
        totalPassives={totalPassives}
        clear={clear}
      />

      <Card
        start={6}
        end={0}
        type="detractors"
        calculate={calculate}
        action={props.updateDetractors}
        totalDetractors={totalDetractors}
        clear={clear}
      />
    </>
  );

  // element to calculate percentages
  const percentages = (
    <>
      <Card
        type="promoters"
        calculate={calculate}
        action={props.updatePromoters}
        totalPromoters={totalPromoters}
        totalPassives={totalPassives}
        totalDetractors={totalDetractors}
      />

      <div className="column column-3">
        <div className="operator operator-minus">&minus;</div>
      </div>

      <Card
        type="detractors"
        calculate={calculate}
        action={props.updateDetractors}
        totalPromoters={totalPromoters}
        totalPassives={totalPassives}
        totalDetractors={totalDetractors}
      />

      <div className="column column-5">
        <div className="operator operator-equal">=</div>
      </div>

      <Card
        type="nps"
        calculate="nps"
        totalPromoters={totalPromoters}
        totalPassives={totalPassives}
        totalDetractors={totalDetractors}
      />
    </>
  );

  // main row component
  return (
    <div className={`row row-${row}`}>
      <div className="column column-1">
        <div className="instructions">
          <h3>{header}</h3>
          <p>
            {body}
            {startOver(calculate)}
          </p>
        </div>
      </div>
      {renderComponent(calculate)}
    </div>
  );

  // ***HELPER FUNCTIONS***

  // render component depending on what you want to calculate
  function renderComponent(calc) {
    if (calc === "totals" || calc === "inputs") {
      return countAndGroup;
    } else if (calc === "percentages") {
      return percentages;
    }
  }

  function toggle(e){
    e.preventDefault()
    setReset(!reset)
  }

  function startOver(calc) {
    if (calc === "percentages") {
      return (
          <strong className="clear">
          <a className="clear-link" href="#" onClick={toggle}>
            Start over
          </a>
          </strong>
        
      );
    }
  }
}

// redux connection
const mapStateToProps = ({ totals, auth }) => ({
  totalPromoters: totals.totalPromoters,
  totalPassives: totals.totalPassives,
  totalDetractors: totals.totalDetractors,
  clear: totals.clear,
  currentUser: auth.currentUser
});

export default connect(mapStateToProps, {
  updatePromoters,
  updatePassives,
  updateDetractors,
  toggleClear
})(Row);
