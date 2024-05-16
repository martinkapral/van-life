import React from "react";
import {
  Link,
  useParams,
  useLocation,
  NavLink,
  Outlet,
} from "react-router-dom";
import { getVan } from "../../api";

export default function VanDetail() {
  const [van, setVan] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  const location = useLocation();

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVan(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>

      {van && (
        <div className="det-van-detail-layout-container">
          <div className="det-van-detail">
            <img src={van.imageUrl} />
            <div className="det-van-detail-info-text">
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
              <h2>{van.name}</h2>
              <p className="van-price">
                <span>${van.price}</span>/day
              </p>
            </div>
          </div>
          <button className="rent-button">Rent this van</button>
          <nav className="det-van-detail-nav">
            <NavLink
              to="."
              end
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ van }} />
        </div>
      )}
    </div>
  );
}
