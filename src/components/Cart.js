import React, { useState } from 'react';
import '../App.css';
import { Table } from 'react-bootstrap';

function Cart() {
  let array = [0, 0, 0, 0];
  let [user] = useState('백승헌');

  return (
    <div>
      <h1 class="user-name">{user}의 장바구니</h1>

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
