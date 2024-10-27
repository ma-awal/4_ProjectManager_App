/* eslint-disable no-unused-vars */
import React from 'react';
import {
  SvgCalendar,
  SvgContact,
  SvgDasboard,
  SvgKanban,
  SvgMessage,
  SvgProjects,
  SvgSettings,
} from '../assets/SvgIcon';

function Aside() {
  return (
    <>
      <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
        <div className="mb-8 flex items-center">
          <div className="flex items-center justify-center rounded-full text-xl font-bold">
            <img
              src="./assets/lws-logo-en.svg"
              className="mx-auto h-10 text-center"
            />
          </div>
        </div>
        <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
          + New Project
        </button>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center">
                <SvgDasboard />
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <SvgProjects />
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <SvgContact />
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <SvgKanban />
                Kanban
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <SvgCalendar />
                Calendar
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <SvgMessage />
                Messages
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <SvgSettings />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Aside;
