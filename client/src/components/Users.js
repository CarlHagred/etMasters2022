import React from "react";

const Users = () => {
  return (
    <React.Fragment>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          password:
          <input type="password" name="password" />
        </label>
        <label>
          handicap:
          <input type="text" name="handicap" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  );
};

export default Users;
