import Card from "../../Cards/card.component";
import { Link } from "react-router-dom";
import "../home/categories.styles.scss";
import "../../SearchBox/searchBox.styles.scss";
import { useState } from "react";

const ShopHats = () => {
  const HatCategories = [
    {
      id: 1,
      title: "straw hats",
      path: "straw_hats",
      imageUrl:
        "https://media.istockphoto.com/id/184397074/photo/straw-hat.webp?b=1&s=612x612&w=0&k=20&c=PSYwaf1ObvRJiteRLEsJByXsa3EaF_4z4ng-HUNUXnY=",
    },
    {
      id: 2,
      title: "Beanies",
      path: "beanies",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/29/05/11/adult-1867471_1280.jpg",
    },
    {
      id: 3,
      title: "Scarfs",
      path: "scarfs",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg",
    },
    {
      id: 4,
      title: "Caps",
      path: "caps",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/12/12/23/56/black-man-1902995_1280.jpg",
    },
    {
      id: 5,
      title: "Visors",
      path: "visors",
      imageUrl:
        "https://media.istockphoto.com/id/537893112/photo/adult-golf-blue-visor.webp?b=1&s=612x612&w=0&k=20&c=pQl5UevjHvthDw0mDsri50vnEoXELyE46rwQflxrXW0=",
    },
  ];
  const [filteredHats, setFilter] = useState(HatCategories);
  const handleChange = (event) => {
    let searchString = event.target.value.toLowerCase();
    const filteredHats = HatCategories.filter((hat) => {
      return hat.title.toLowerCase().includes(searchString);
    });
    setFilter(filteredHats);
  };

  return (
    <>
      <div className="search-box-container">
        <input
          className="search-box"
          placeholder="Search for Product"
          type="search"
          onChange={handleChange}
        />
      </div>

      <div className="categories-container">
        {filteredHats.map(({ title, id, imageUrl, path }) => {
          return (
            <Link to={path} className="category-container">
              <div
                className="background-image"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              />
              <div className="category-body-container">
                <Card key={id} id={id} title={title.toUpperCase()} />
                <p>SHOP NOW</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ShopHats;
