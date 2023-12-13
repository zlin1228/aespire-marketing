import { Link, navigate } from 'gatsby';
import { useEffect, useState } from 'react';

import Icon from 'molecules/Icon';

import onKeyDown from 'utils/onKeyDown';

import type { FC } from 'react';

type PaginationProps = {
  total: number;
  currentPage: number;
  countPerpage: number;
  toId: string;
  space: number;
  baseUrl: string;
  resourceType: string;
};

export const scrollTo = (id: string, space: number) => {
  const initialPosition = window.scrollY;
  const element = id ? document.getElementById(id) : null;

  if (!element) {
    return false;
  }

  const destinationPos = initialPosition + element.getBoundingClientRect().top - space;
  window.scrollTo({
    top: destinationPos,
    behavior: 'smooth',
  });
};

const Pagination: FC<PaginationProps> = ({ total, currentPage, countPerpage, baseUrl, resourceType }) => {
  const totalPage = Math.ceil(total / countPerpage);
  const [currentLayer, setCurrentLayer] = useState(0);
  const [param, setParam] = useState('');
  const Ellipsis = 'div';

  const go2Page = (pg: number) => {
    navigate(`/${resourceType}/page/${pg}${param || ''}`);
  };

  useEffect(() => {
    if (currentPage) {
      setCurrentLayer(Math.floor(currentPage / 5) * 5);
    }
  }, [currentPage]);

  useEffect(() => {
    const params = document.location.search;
    setParam(params);
  }, []);

  return (
    <div className="relative flex flex-wrap items-center justify-center gap-1 md:gap-2">
      <Link
        className="flex h-10 w-10 items-center justify-center bg-gray-900"
        to={currentPage > 1 ? `${baseUrl}/page/${currentPage - 1}` : baseUrl}
      >
        <Icon className="fill-white" icon="arrow-left" size={20} />
      </Link>
      {currentPage > 4 && currentLayer !== 0 && (
        <Link
          className="flex h-10 w-10 items-center justify-center font-semibold text-gray-900"
          to={`${baseUrl}/page/${currentLayer}${param || ''}`}
        >
          {currentLayer.toString()}
        </Link>
      )}
      {currentLayer + 1 <= totalPage && (
        <Link
          className="flex h-10 w-10 items-center justify-center font-semibold text-gray-900"
          to={`${baseUrl}/page/${currentLayer + 1}${param || ''}`}
        >
          {(currentLayer + 1).toString()}
        </Link>
      )}
      {currentLayer + 2 <= totalPage && (
        <Link
          className="flex h-10 w-10 items-center justify-center font-semibold text-gray-900"
          to={`${baseUrl}/page/${currentLayer + 2}${param || ''}`}
        >
          {(currentLayer + 2).toString()}
        </Link>
      )}
      {currentLayer + 3 <= totalPage && (
        <Link
          className="flex h-10 w-10 items-center justify-center font-semibold text-gray-900"
          to={`${baseUrl}/page/${currentLayer + 3}${param || ''}`}
        >
          {(currentLayer + 3).toString()}
        </Link>
      )}
      {currentLayer + 4 <= totalPage && (
        <Link
          className="flex h-10 w-10 items-center justify-center font-semibold text-gray-900"
          to={`${baseUrl}/page/${currentLayer + 4}${param || ''}`}
        >
          {(currentLayer + 4).toString()}
        </Link>
      )}
      {currentLayer + 5 < totalPage && (
        <Ellipsis
          className="font-semibold"
          tabIndex={0}
          onClick={() => go2Page(currentLayer + 5)}
          onKeyDown={e => onKeyDown(e, () => go2Page(currentLayer + 5))}
        >
          ...
        </Ellipsis>
      )}
      {currentLayer + 5 <= totalPage && (
        <Link
          className="flex h-10 w-10 items-center justify-center font-semibold text-gray-900"
          to={`${baseUrl}/page/${totalPage}${param || ''}`}
        >
          {totalPage.toString()}
        </Link>
      )}
      <Link
        className="flex h-10 w-10 items-center justify-center bg-gray-900"
        to={currentPage < totalPage ? `${baseUrl}/page/${currentPage + 1}${param || ''}` : baseUrl}
      >
        <Icon className="fill-white" icon="arrow-right" size={20} />
      </Link>
    </div>
  );
};

export default Pagination;
