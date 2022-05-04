import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { id } = useParams();

  return <>{`Du är inloggad som ${id}`}</>;
};

export default UserPage;
