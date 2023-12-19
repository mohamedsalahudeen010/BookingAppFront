import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyListUser = () => {
  const { data, loading, error } = useFetch("http://localhost:2005/api/hotels/countByType")

  console.log(data)
  const images = [
    "https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/06/21/14/hotelroom.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
    "https://static.wixstatic.com/media/274ef9_6935073bbd784450a32b5681e95cecb3~mv2.jpg/v1/fill/w_640,h_532,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/274ef9_6935073bbd784450a32b5681e95cecb3~mv2.jpg",
    "https://www.berkeleytravel.co.uk/wp-content/uploads/mauritius.jpg",
    "https://vnctglobal.com/wp-content/uploads/2023/06/web-poster-1.jpg",
    "https://assets.architecturaldigest.in/photos/60144e9f24f71792e0aa26b0/16:9/w_2560%2Cc_limit/ooty-villa-hill-station-india-natural-materials_6-2-1366x768.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading..."
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyListUser;