/* eslint-disable no-unused-vars */
import Caret from './Caret';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="absolute -left-[24px] bottom-0 mt-auto flex w-full items-center justify-center gap-[5px]">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`flex h-[32px] w-[32px] items-center justify-center rounded-md 
               border-2 border-lightViolet font-[800] text-violet disabled:bg-lightViolet`}
      >
        <Caret isDisabled={currentPage === 1} className="rotate-180" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${page === currentPage ? 'border-violet' : 'border-lightViolet'} flex h-[32px] w-[32px]
          items-center justify-center rounded-md border-2  font-[800] text-violet`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pages.length}
        className={`flex h-[32px] w-[32px] items-center justify-center rounded-md 
          border-2 border-lightViolet font-[800] text-violet disabled:bg-lightViolet`}
      >
        <Caret isDisabled={currentPage === pages.length} />
      </button>
    </div>
  );
};

export default Pagination;
