import React from 'react';

export default function Table(props) {
  return (
    <>
      <div className={props.className}>
        <table className={props.className}>
          <thead className={props.className}>
            <tr className={props.className}> {props.children}</tr>
          </thead>
          <tbody className={props.className}>
            <th scope="col" className={props.className}>
              {props.children}
            </th>
          </tbody>
        </table>
      </div>
    </>
  );
}
