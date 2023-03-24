import React from 'react';
import PropTypes from 'prop-types';

export default function Table(props) {
  const {
    data,
  } = props;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Id</th>
            <th scope="col" className="px-6 py-3">Avatar</th>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={user.id}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.id}</th>
              <td className="px-6 py-4">
                <img src={user.avatar} alt={user.avatar} width="100" height="100" className="rounded-full w-10" />
              </td>
              <td className="px-6 py-4">{`${user.first_name} ${user.last_name}`}</td>
              <td className="px-6 py-4">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const usersData = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(usersData)).isRequired,
};
