import React from "react";
import { useOutletContext } from "react-router-dom";

export default function VanInfo() {
  const { van } = useOutletContext();

  return (
    <section className="det-van-detail-info">
      <h4>
        Name: <span>{van.name}</span>
      </h4>
      <h4>
        Category: <span className="ctg">{van.type}</span>
      </h4>
      <h4>
        Description: <span>{van.description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </section>
  );
}
