import useFetch from "../../hooks/useFetch";
import "./featured.css";

const FeaturedUser = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:2005/api/hotels/countByCity?cities=Chennai,Coimbatore,Ramanathapuram"
  );

  console.log(data)
 


  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.nobroker.in/blog/wp-content/uploads/2022/02/Property-rates-in-Chennai-1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Chennai</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://roofandfloor.thehindu.com/raf/real-estate-blog/wp-content/uploads/sites/14/2021/07/Most-Searched-Localities-in-Coimbatore-1.png"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Coimbatore</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://peopleplaces.in/wp-content/uploads/2023/02/cropped-Dhanushkodi.jpeg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ramanathapuram</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedUser;