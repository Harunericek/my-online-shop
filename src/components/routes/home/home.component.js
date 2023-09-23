import Card from "../../Cards/card.component";
import "./categories.styles.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "path": "shop/hats",
      "imageUrl": "https://img.freepik.com/vektoren-premium/seitenansicht-verschiedener-kappen-doodle-vektor-illustrationen-gesetzt_7087-2446.jpg"
    },
    {
      "id": 2,
      "title": "jackets",
      "path": "shop/jackets",
      "imageUrl": "https://img.freepik.com/vektoren-kostenlos/schwarzweiss-maennliche-mit-kapuze-sweatshirts_1284-11794.jpg?w=1060&t=st=1695468031~exp=1695468631~hmac=872df07bac4034c2abd3d1c1a40c073f3c32e313dbf888b148cd562033993f5c"
    },
    {
      "id": 3,
      "title": "sneakers",
      "path": "shop/sneakers",
      "imageUrl": "https://img.freepik.com/fotos-kostenlos/ein-paar-turnschuhe_144627-3809.jpg?size=626&ext=jpg&ga=GA1.2.1081447834.1653501580&semt=sph"
    },
    {
      "id": 4,
      "title": "women",
      "path": "shop/women",
      "imageUrl": "https://img.freepik.com/fotos-kostenlos/modische-blasse-bruenette-in-langem-gruenem-kleid-schwarzer-jacke-und-sonnenbrille-die-tagsueber-auf-der-strasse-gegen-die-wand-des-hellen-stadtgebaeudes-steht_197531-24468.jpg?t=st=1695468114~exp=1695468714~hmac=5f60eccba397a3889f056da201ca724806f9fa949a27cb9ca11fd130257a4f1d"
    },
    {
      "id": 5,
      "title": "men",
      "path": "shop/",
      "imageUrl": "https://img.freepik.com/fotos-kostenlos/retro-mann-gekleidet-im-hemd-liegt-auf-boden-und-posiert_171337-9906.jpg?w=1480&t=st=1695468171~exp=1695468771~hmac=0034d5e889f2965a6cedba4921f2a1b3a3aa2b1c9517f9e8aaea90c9851fd7e8"
    }
  ]

  return (
    <>
      <div className="categories-container">
        {categories.map(({title, id, imageUrl, path}) => {
          return (
            <Link to={path} className="category-container">
              <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
              }}/>
              <div className="category-body-container">
                <Card key={id} id={id} title={title.toUpperCase()}/>
                <p>SHOP NOW</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
