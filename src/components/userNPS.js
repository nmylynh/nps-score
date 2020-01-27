import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import 'react-accessible-accordion/dist/fancy-example.css';

// renders the user's nps
function UserNPS(props) {

  const { userNPS } = props;

  const npsList = userNPS.map(nps => (
    <AccordionItem key={nps.id}>
      <AccordionItemHeading>
        <AccordionItemButton>
          {nps.name} created on {formatDate(nps.created_at)}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>Description: {nps.description}</p>
        <p>
          Total participants:{" "}
          {nps.total_promoters + nps.total_passives + nps.total_detractors}
        </p>
        <p>NPS score: {nps.nps_score}</p>
      </AccordionItemPanel>
    </AccordionItem>
  ));

  return (
    <div className="section section-ruled projects-section">
      <div className="container">
        <div className="cols">
          <div className="wrapper">
            <div className="heading">
              <h2>Your past projects:</h2>
            </div>
          </div>
        </div>
      </div>

      <Accordion>{npsList ? npsList : null}</Accordion>
    </div>
  );
  function formatDate(date) {
    return date.split("T")[0];
  }
}

export default UserNPS;
