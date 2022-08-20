// import React from "react";

// const Pagination = ({ postsPerPage,totalPosts,paginate}) =>{
//     const pageNumbers = [];

//     for (let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
//         pageNumbers.push(i);
//     }
//     return (
//         <nav>
//             <div className="pagination">
//                 {pageNumbers.map(number =>(
//                     <div key={numbers} className="active">
//                         <a onClick={() => paginate(number)} href="#landing">
//                             {number}
//                         </a>
//                     </div>
//                 ))}

//             </div>
//         </nav>

//     );

// };

// export default Pagination;