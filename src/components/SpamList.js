import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Spam from "./Spam";

const spam = [
  {
    mId: "guid-3",
    unread: true,
    subject: "Pre Approved Loan",
    content:
      "Congratulations ! <u>Credit card<u> is being shipped to you today!",
  },
  {
    mId: "guid-4",
    unread: true,
    subject: "You won a lottery!",
    content:
      "You have just won the New York official lottery. Please send us your address so that we may start the transfer.",
  },
];

const SpamList = ({ match }) => {
  const spamEmail = spam;
  const { url } = useRouteMatch();

  const linkList = spamEmail.map((email) => {
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
          <h3>Spam Email</h3>
          <ul>{linkList}</ul>
        </div>
      </div>

      <Route path={`${url}/:emailId`}>
        <Spam data={spamEmail} />
      </Route>
      <Route exact path={url}>
        <p style={{ paddingLeft: "15px" }}>Please select a Email.</p>
      </Route>
    </div>
  );
};

export default SpamList;
