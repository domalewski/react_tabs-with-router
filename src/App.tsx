import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';
import {
  NavLink, Routes, Route, Navigate,
} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Tabs from './pages/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={
              ({ isActive }) => cn('navbar-item', { 'is-active': isActive })
            }
            to="/"
          >
            Home

          </NavLink>

          <NavLink
            className={
              ({ isActive }) => cn('navbar-item', { 'is-active': isActive })
            }
            to="/tabs"
          >
            Tabs

          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="tabs"
          >
            <Route index element={<Tabs tabs={tabs} />} />
            <Route path=":tabId" element={<Tabs tabs={tabs} />} />
          </Route>
          <Route
            path="/home"
            element={<Navigate to="/" />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </div>
  </>
);
