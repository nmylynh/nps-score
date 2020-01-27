import React, { useState, useEffect } from "react";

export default function Card(props) {
  // props
  let {
    start,
    end,
    type,
    calculate,
    action,
    totalPromoters,
    totalPassives,
    totalDetractors, 
    clear
  } = props;

  // local state
  const [state, setState] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    promoters: totalPromoters,
    passives: totalPassives,
    detractors: totalDetractors
  });

  // ***UPDATERS***

  // updates the store depending on inputs
  useEffect(() => {
    if (calculate === "inputs") {
      action(sum(type));
    } else if (calculate === "totals") {
      action(selectState(type));
    }
  }, [state]);

  // updates the local state to reflect new changes in totals
  useEffect(() => {
    setState({
      ...state,
      [type]: selectProps(type)
    });
  }, [totalPromoters, totalPassives, totalDetractors]);

  // clears form
  useEffect(() => {
    setState({
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      promoters: 0,
      passives: 0,
      detractors: 0
    });
  }, [clear]);

  
  // ***CONDITIONAL ELEMENTS***

  // counting inputs element
  let nums = range(end, start + 1);
  const input = nums.map(i => (
    <div key={i} className="total">
      <div>{i}</div>
      <div>
        <input
          type="text"
          pattern="[0-9]*"
          name={i}
          value={state[i]}
          className="total-input"
          onChange={handleChange}
        />
      </div>
    </div>
  ));

  // totals element
  const totalInput = (
    <div className="total">
      <div>Total</div>
      <div>
        <input
          type="text"
          pattern="[0-9]*"
          name={type}
          value={selectState(type)}
          className="total-input"
          onChange={handleChange}
        />
      </div>
    </div>
  );

  // percentages element
  const sumOfAllTypes = totalPromoters + totalPassives + totalDetractors;
  const percentage = type =>
    Math.round((selectProps(type) / sumOfAllTypes) * 100);
  const percentages = (
    <div className="total">
      <div className="total-percent">
        {`${percentage(type) ? percentage(type) : 0}%`}
      </div>
      <div className="total-label">of total responses</div>
    </div>
  );

  // nps element
  const calcNps = () => percentage("promoters") - percentage("detractors");
  const nps = (
    <div className="total">
      <div className="total-percent">
        {calcNps() ? calcNps() : 0}
      </div>
      <div className="total-label">This is your NPS.</div>
    </div>
  );

  // main card component
  return (
    <div className={`column column-${column(type)}`}>
      <div className={`group group-${type}`}>
        <div
          className={`emote image-${type}`}
        ></div>
        <div className="totals">{renderComponent(calculate)}</div>
        {selectLine(type, calculate)}
      </div>
    </div>
  );

  // ***HELPER FUNCTIONS***

  // renders the amount of input fields depending on a range
  function range(start, end) {
    let nums = [];
    for (let i = start; i < end; i++) {
      nums.unshift(i);
    }
    return nums;
  }

  // handles the changes in inputs
  function handleChange(evt) {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: Number(value) ? Number(value) : 0
    });
  }

  // places the type in the appropriate columns
  function column(type) {
    if (type === "promoters") {
      return "2";
    } else if (type === "passives") {
      return "3";
    } else if (type === "detractors") {
      return "4";
    } else if (type === "nps") {
      return "6";
    }
  }

  // sums up the amount of responses
  function sum(type) {
    if (type === "promoters") {
      return state[10] + state[9];
    } else if (type === "passives") {
      return state[8] + state[7];
    } else if (type === "detractors") {
      return (
        state[6] +
        state[5] +
        state[4] +
        state[3] +
        state[2] +
        state[1] +
        state[0]
      );
    }
  }

  // selects the local state depending on type
  function selectState(type) {
    if (type === "promoters") {
      return state.promoters;
    } else if (type === "passives") {
      return state.passives;
    } else if (type === "detractors") {
      return state.detractors;
    }
  }

  // selects the props depending on the type
  function selectProps(type) {
    if (type === "promoters") {
      return totalPromoters;
    } else if (type === "passives") {
      return totalPassives;
    } else if (type === "detractors") {
      return totalDetractors;
    }
  }

  // renders the appropriate component depending on what you want to calculate
  function renderComponent(calc) {
    if (calc === "inputs") {
      return input;
    } else if (calc === "totals") {
      return totalInput;
    } else if (calc === "percentages") {
      return percentages;
    } else if (calc === "nps") {
      return nps;
    }
  }

  // selects appropriate image for each card
  function selectLine(type, calc) {
    if (calc === "inputs") {
      return (
        <div
          className={`connect inputs inputs-${type} inputs-image-${type}`}
        ></div>
      );
    } else if (calc === "totals" && type === "promoters") {
      return (
        <div className="connect totals-promoters totals-image-promoters"></div>
      );
    } else if (calc === "totals" && type === "detractors") {
      return (
        <div className="connect totals-detractors totals-image-detractors"></div>
      );
    }
  }
}
