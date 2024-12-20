'use client'
import { usePageUpdateContext } from '@/src/context/pageUpdate';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react';

export default function Pagination(props: any) {
  const {totalItems} = props;
  // function Pagination({ currentPage=5, hendlePage=2, totalItems = 10 }) {
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(5);
    const [currentPage, setCurrentPage] = usePageUpdateContext();
const ITEMS_PER_PAGE = 6;

useEffect(() => {
  setTotalPage(Math.ceil(totalItems / ITEMS_PER_PAGE));
  console.log(totalItems)
}, [totalItems])

  function hendlePage(checkStr: string, value: number) {
    if (value > 0) {
      if (checkStr === "next" && value < 2) {
        setCurrentPage(value + 1)
        setPage(value + 1);
      } else if (checkStr === "previous" && value > 1 && value <= 3) {
        setCurrentPage(value - 1);
        setPage(value - 1);
      } else if (checkStr === "setPage") {
        setCurrentPage(value)
        setPage(value);
      }
    } else {
      setPage(1);
    }
  }

  return (
    <div className="flex items-center justify-between border-t border-blue-900 px-4 py-3 sm:px-6">
      {/* mobile */}
      <div className="flex flex-1 justify-between sm:hidden">
        <p
          onClick={(e) => {
            hendlePage("previous", currentPage);
          }}
          className="relative inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-300"
        >
          Previous
        </p>
        <p
          onClick={(e) => {
            hendlePage("next", currentPage);
          }}
          className="relative ml-3 inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium dark:ring-gray-300 hover:bg-gray-300 transition-all cursor-pointer"
        >
          Next
        </p>
      </div>
{/* desctop */}
      <div className="hidden sm:flex  sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm ">
            Showing{" "}
            <span className="font-medium">
              {(currentPage - 1) * ITEMS_PER_PAGE + 1}
            </span>{" "}
            to <span className="font-medium">
            {Math.min(currentPage * ITEMS_PER_PAGE, totalItems)}
              </span> of{" "}
            <span className="font-medium">{totalItems}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <p
              onClick={() => {
                hendlePage("previous", currentPage);
              }}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset dark:ring-gray-300 hover:bg-gray-300 transition-all cursor-pointer focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </p>
            <div className='dark:border-white border-theme-blue border'>
            {Array.from({ length:totalPage }).map(
              (e, index) => (
                <p
                  key={index}
                  onClick={() => {
                    hendlePage("setPage", index + 1);
                  }}
                  aria-current={currentPage === index + 1 ? "page" : undefined}
                  className={`relative  cursor-pointer z-10 inline-flex items-center ${
                    index + 1 === currentPage
                      ? "bg-indigo-600 "
                      : "-600 "
                  } px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  {index + 1}
                </p>
              )
            )}

            </div>

            <p
              onClick={() => {
                hendlePage("next", currentPage);
              }}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </p>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
          </nav>
        </div>
      </div>
    </div>
  );
}