import React from "react";
import { Pagination } from "react-bootstrap";

export default function PagePagination({ page, setPage, hasNextPage }) {
  function adjust(amount){
    setPage(prevPage => prevPage + amount)
  }
  return (
    <Pagination>
      {page !== 1 && <Pagination.Prev onClick={() => adjust(-1)} />}
      {page !== 1 && <PagePagination.Item onClick={() => setPage(1)}>1</PagePagination.Item>}
      {page > 2 && <Pagination.Ellipsis />}
      {page > 2 && <Pagination.Item onClick={() => setPage(-1)} > {page - 1} </Pagination.Item>}
       <Pagination.Item active> {page} </Pagination.Item>
       {hasNextPage && <Pagination.Item onClick={() => setPage(1)}> {page + 1} </Pagination.Item>}
       {hasNextPage && <PagePagination.Next onClick={() => setPage(1)}/>}
    </Pagination>
  );
}
