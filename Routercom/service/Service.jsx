import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Service() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="d-flex justify-content-center">Service</h1>
      <div className="d-flex gap-5 p-5">
        <Button
          className="w-50"
          color="danger"
          onClick={() => navigate("/Service/Car")}
        >car
        </Button>
        <Button
          className="w-50"
          color="danger"
          onClick={() => navigate("/Service/Bike")}
        >Bike
        </Button>
      </div>
      <Outlet />
    </div>
  );
}
