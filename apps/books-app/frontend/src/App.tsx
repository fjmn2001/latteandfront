import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LOGIN, LOGOUT } from "./auth/config/routes/paths"
import Login from "./auth/views/Login"
import { AuthContextProvider } from "./auth/contexts/authContext"
import PublicRoute from "./shared/components/router/PublicRoute"
import PrivateRoute from "./shared/components/router/PrivateRoute"
import {
  BOOK_ADD,
  BOOK_DELETE,
  BOOK_DETAIL,
  BOOK_EDIT,
  BOOKS,
} from "./books/config/router/paths"
import BookAddView from "./books/views/BookAddView"
import BookDeleteView from "./books/views/BookDeleteView"
import BookDetailView from "./books/views/BookDetailView"
import BookEditView from "./books/views/BookEditView"
import BooksView from "./books/views/BooksView"
import LogoutView from "./auth/views/LogoutView"

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<PublicRoute />}>
            <Route index element={<Login />}></Route>
          </Route>
          <Route path={"/user"} element={<PrivateRoute />}>
            <Route path={BOOK_ADD} element={<BookAddView />} />
            <Route path={BOOK_DELETE} element={<BookDeleteView />} />
            <Route path={BOOK_DETAIL} element={<BookDetailView />} />
            <Route path={BOOK_EDIT} element={<BookEditView />} />
            <Route path={BOOKS} element={<BooksView />} />
            <Route path={LOGOUT} element={<LogoutView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
