import React from 'react';
import { Table } from 'react-bootstrap';

function Cart() {
  let array = [0, 0, 0, 0];

  return (
    <div>
      <h6>백승헌의 장바구니</h6>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {array.map((a, i) => (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button onClick={() => {}}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
