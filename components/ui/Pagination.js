const Pagination = ({ totalPosts, postPerPage, currentPage, setCurrentPage }) => {
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

export default Pagination;
