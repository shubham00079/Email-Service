import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Inbox from "./Inbox";

const inbox = [
  {
    mId: "guid-1",
    unread: true,
    subject: "Training Program",
    content:
      "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
  },
  {
    mId: "guid-2",
    unread: false,
    subject: "Empower your future",
    content:
      "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
  },
];

const InboxList = ({ match }) => {
  const inboxEmail = inbox;
  const { url } = useRouteMatch();

  const linkList = inboxEmail.map((email) => {
    return (
      <li key={email.mId}>
        <Link to={`${url}/${email.mId}`}>{email.subject}</Link>
      </li>
    );
  });

  return (
    <div>
      <div>
        <div style={{ paddingLeft: "15px" }}>
          <br></br>
          <br></br>
          <h3>Inbox Email</h3>
          <ul>{linkList}</ul>
        </div>
      </div>

      <Route path={`${url}/:emailId`}>
        <Inbox data={inboxEmail} />
      </Route>
      <Route exact path={url}>
        <p style={{ paddingLeft: "15px" }}>Please select a Email.</p>
      </Route>
    </div>
  );
};

export default InboxList;
