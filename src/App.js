import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomeUser from './User/pages/home/Home';
import LoginUser from './User/pages/login/Login';
import ListUser from './User/pages/list/List';
import HotelUser from './User/pages/hotel/Hotel';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContextUser } from './context/AuthContext';
import LoginAdmin from './Admin/pages/login/LoginAdmin';
import HomeAdmin from './Admin/pages/home/HomeAdmin';
import ListAdmin from './Admin/pages/list/List';
import { hotelColumns, roomColumns, userColumns } from './dataTableSource';
import SingleAdmin from './Admin/pages/single/Single';
import NewAdmin from './Admin/pages/new/New';
import { userInputs } from './formSource';
import NewHotelAdmin from './Admin/pages/newHotel/NewHotel';
import NewRoomAdmin from './Admin/pages/newRoom/NewRoom';
import SignUpUser from './User/pages/signUp/SignUpUser';
import SignUpAdmin from './Admin/pages/signUp/SignUpAdmin';



function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContextUser);

    if (!user) {
      return 
    }

    return children;
  };
  return (
    <div className={darkMode ? "app dark" : "app"}>
   <Switch>
    <Route exact path="/">
<HomeUser></HomeUser>
    </Route>

    <Route path="/loginUser">
      <LoginUser></LoginUser>
    </Route>

    <Route path="/userSignUp">
     <SignUpUser></SignUpUser>
    </Route>

    <Route path="/hotels">
      <ListUser></ListUser>
    </Route>

    <Route path="/hotel/:id">
      <HotelUser></HotelUser>
    </Route>
    
{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Admin >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   */}


<Route path="/adminLogIn">
      <LoginAdmin></LoginAdmin>
    </Route>

    <Route path="/signUpAdmin">
     <SignUpAdmin></SignUpAdmin>
    </Route>

    <Route path="/adminHome">
      <HomeAdmin></HomeAdmin>
    </Route>

    <Route path="/adminUsers">
    <ListAdmin columns={userColumns}> </ListAdmin>
    </Route>

    <Route path="/admin:userId">
      <SingleAdmin></SingleAdmin>
    </Route>

    <Route path="/adminNew">
    <NewAdmin inputs={userInputs} title="Add New User" />
    </Route>

    <Route path="/adminHotels">
    <ListAdmin columns={hotelColumns}> </ListAdmin>
    </Route>

    <Route path="/admin:productId">
      <SingleAdmin></SingleAdmin>
    </Route>

    <Route path="/adminNewHotel">
     <NewHotelAdmin></NewHotelAdmin>
    </Route>
    
    <Route path="/adminRooms">
    <ListAdmin columns={roomColumns}> </ListAdmin>
    </Route>

    <Route path="/adminNewRooms">
   <NewRoomAdmin></NewRoomAdmin>
    </Route>

{/* <div >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel  />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="rooms">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={roomColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewRoom  />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter> */}

   </Switch>
    </div>
  );
}

export default App;
