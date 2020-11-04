import React from "react";
import { useParams } from "react-router-dom";

const Spam = ({ data }) => {
  const { emailId } = useParams();
  const email = data.find((p) => p.mId === emailId);
  let productData;

  if (email) {
    productData = (
      <div style={{ textAlign: "center" }}>
        <h3> {email.subject} </h3>
        <p>{email.content}</p>
        <hr />
      </div>
    );
  } else {
    productData = <h2> Sorry. Email doesn't exist </h2>;
  }

  return (
    <div>
      <div>{productData}</div>
    </div>
  );
};

export default Spam;
