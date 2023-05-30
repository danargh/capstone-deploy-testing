import { useEffect } from "react";

export const Pagination = ({ totalPosts, postPerPage, currentPage, setCurrentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map((page, index) => {
                const isActive = page === currentPage;
                return (
                    <button
                        key={index}
                        className={`border-web-green-100 m-5 w-[84px] h-[59px] justify-center items-center text-xl font-medium border rounded-md ${isActive ? 'bg-web-green-300 text-neutral-0' : 'text-web-green-300 hover:bg-web-green-300 hover:text-neutral-0'}`}

                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export const PaginationOrderDokter = ({ orderShow, totalPosts, postPerPage, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalPosts / postPerPage);
    const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const goToPrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };
    useEffect(() => {
        setCurrentPage(1);
    }, [orderShow]);
    return (
        <div>
            <button className={`border py-2 px-6 rounded-l-lg ${currentPage === 1 ? 'text-neutral-80 bg-neutral-20' : 'bg-neutral-0'}`} onClick={goToPrevPage} disabled={currentPage === 1}>
                Sebelumnya
            </button>
            <button className={`border py-2 px-6 rounded-r-lg ${currentPage === totalPages ? 'text-neutral-80 bg-neutral-20' : 'bg-neutral-0'}`} onClick={goToNextPage} disabled={currentPage === totalPages}>
                Selanjutnya
            </button>
        </div>
    );
};

