import React, { useEffect, useState } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import Button from '../components/atoms/Button';
import Table from '../components/moleculas/table';
import api from '../utils/api';

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchUsers = async () => {
    const result = await api.getDataEmployees(currentPage);
    setUsers(result.data);
    setTotalPages(result.total_pages);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleFirstClick = () => {
    setCurrentPage(1);
  };

  // const handleLastClick = () => {
  //   setCurrentPage(totalPages);
  // };

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  return (
    <div>
      <div className="p-10">
        <Table data={users} />
      </div>
      <div className="pl-10 pr-10">
        <p className="tracking-wider font-light text-sm text-gray-600 flex justify-center pb-2">{`Page ${currentPage} of ${totalPages}`}</p>
        <div className="flex justify-center">
          <Button
            type="button"
            onClick={() => handleFirstClick()}
            disabled={currentPage === 1}
            className={`${currentPage === 1 ? 'inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-gray-200 border border-gray-300 rounded-lg' : 'inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-[#B1B2FF] hover:border-none hover:text-white shadow-lg'}`}
          >
            First
          </Button>
          <Button
            type="button"
            onClick={() => handlePrevClick()}
            disabled={currentPage === 1}
            className={`${currentPage === 1 ? 'inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-gray-200 border border-gray-300 rounded-lg' : 'inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-[#B1B2FF] hover:border-none hover:text-white shadow-lg'}`}
          >
            <FaLongArrowAltLeft />
            Prev
          </Button>
          <Button
            type="button"
            onClick={() => handleNextClick()}
            disabled={currentPage === totalPages}
            className={`${currentPage === totalPages ? 'inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-gray-200 border border-gray-300 rounded-lg' : 'inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-[#B1B2FF] hover:border-none hover:text-white shadow-lg'}`}
          >
            Next
            <FaLongArrowAltRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
