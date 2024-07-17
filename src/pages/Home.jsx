
import AddNote from "../components/AddNote";
import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <>
     <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="md:w-full md:h-screen md:flex md:items-center md:justify-center shadow-md px-5">
      <AddNote />
    </div>
    </>
   
  );
};

export default Home;
