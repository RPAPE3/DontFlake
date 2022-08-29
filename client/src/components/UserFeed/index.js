import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import UserEventsFeed from "../UserEventsFeed";

import { QUERY_USER_DATA } from "../../utils/queries";

import Auth from "../../utils/auth";
import { color } from "@mui/system";

const UserFeed = () => {
  const [open, setOpen] = useState(false);

  const profile = Auth.getProfile();
  const { loading, data } = useQuery(QUERY_USER_DATA, {
    variables: { email: profile.data.email },
  });

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.email) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <Button
          className="fs-3"
          style={{
            height: "100px",
            width: "100%",
            marginTop: "10px",
            backgroundColor: "purple",
            color: "white",
            marginBottom: "10px",
          }}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Click me to post an event!
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <form
              style={{
                width: "100%",
                backgroundColor: "purple",
                marginBottom: "10px",
              }}
            >
              <div className="form-group border border-dark p-3 mb-2 text-dark text-center collpase">
                <input
                  type="text"
                  class="form-control"
                  style={{ height: "100px", marginBottom: "5px" }}
                  placeholder="Enter a description for your event here:"
                />
                <input
                  type="text"
                  class="form-control"
                  style={{ height: "100px", marginBottom: "5px" }}
                  placeholder="Date/Time of your event?"
                />
                <input
                  type="text"
                  class="form-control"
                  style={{ height: "100px", marginBottom: "5px" }}
                  placeholder="Where is the event being held?"
                />
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Private Event
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Public Event
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-dark p-3 mb-2 text-white"
                style={{
                  width: "50%",
                  marginLeft: "25%",
                  backgroundColor: "black",
                }}
              >
                Post Event!
              </button>
            </form>
          </div>
        </Collapse>

        <div style={{ background: "grey" }}>
          <UserEventsFeed events={user.events} username={user.username} />
        </div>
      </div>
    </>
  );
};

export default UserFeed;
