import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes//navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import { Fragment } from "react";
import Shop from "./components/routes/shop/shop.component";
import Contact from "./components/routes/contact/contact.component"
import SignIn from "./components/routes/signIn/signIn.component"
import ShoppingCard from "./components/routes/shoppingCard/shoppingCard.component"


const App = () => {
  return (
    <Fragment>{/*durch das Fragment Element wird kein weiteres div element gerendert. Beim Untersuchen des Codes haben wir eine bessere Übersicht. */}
      <Routes>{/*Zeigt die Route in der App Komponente an */}
        <Route path="/" element={<Navigation />}>{/*path gibt den url endpoint aus und element das element was gerendert werden soll */}
          <Route index element={<Home />} />{/*path wurde durch index ersetzt um direkt die Homepage zu render */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/shopping-card" element={<ShoppingCard />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
