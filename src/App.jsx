import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./RootLayout/RootLayout";
import Home from "./pages/Home";
import TaskView from "./pages/TaskView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<RootLayout/>}>
      <Route index path="/" element={<Home />} />
      <Route index path="/taskview" element={<TaskView/>} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
