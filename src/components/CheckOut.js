import React, {useState, useEffect} from 'react'


const CheckOut=()=> {
    return(

        <section className="section checkout-section container-fluid">

            <div className="row"> 
                <div className="col-md-6">
                    <p className="checkout-text">Check out here:  </p>
                </div>
                <div className="col-md-6">
                    <button type="button" className="btn btn-link  nav-button" id="checkout">Checkout</button>
                </div>
            </div>

            <div className="row checkout-row">
                <div className="checkout-col col-md-6">
                <div id="orderDiv">
                {/* <!--changed from shoppingDiv--> */}
                    <div className="order-buttons">
                    {/* <!--changed from shopping-buttons--> */}
                        <button type="button" className="btn" id="orderBtn"><span id="orderItems">0</span> item(s) - $<span id="orderSubTotal">0.00</span></button>
                        {/* <!--changed from cartSubTotal--> */}
                    </div>
                </div>
                <div className="row">
                <div className="col-md-11">
                    <h2 className="checkout-header">Checkout</h2>
                    <p className="checkout-text">We hope you love your math art!</p>
                    <p className="checkout-text mb-1">Join the FACETS community to see new items!</p>
                </div>
                <div className="col-md-1">
                    <p className="checkout-item-count">
                        <span id="checkoutItemCount"></span>
                   </p>
                </div>
                </div>
                <div className="row">
                <div className="col table-col">
                {/* <!--create a table; contain product, code, quantity, etc.--> */}
                  
                   <table className="table" id="table">
                       <tr className="table-headers">
                           <th>product name</th>
                           {/* <!--<th>product code</th>--> */}
                           <th>unit price</th>
                           <th>quantity</th>
                           <th>subtotal</th>
                       </tr>

                       <tbody id="tbody"></tbody>
                       {/* <!--load items into the table body--> */}
                       <tr className="totals" id="totals">
                           <td colspan="4">
                           {/* <!--allows product info to slide the following over to the next columns--> */}
                               <p className="total-subtotal" id="total-subtotal">Subtotal:</p>
                               {/* <!--<p className="total-shipping" id="totalShipping">Shipping:</p>--> */}
                               <p className="total-tax" id="totalTax">Tax:</p>
                               <p className="total-total" id="totalTotal">Total:</p>
                           </td>
                           <td className="total-values" id="totalValues">
                               <p className="subtotal-value" id="subtotalValue"></p>
                               {/* <!--<p className="shipping-value" id="shippingValue">6.00</p>--> */}
                               <p className="tax-value" id="taxValue"></p>
                               <p className="total-value">$<span id="totalValue"></span></p>
                           </td>
                       </tr>
                   </table>
                </div>
                </div>

                <div className="row">
                <div className="col">
                    <button className="btn confirm-btn" id="confirmButton">confirm order</button>
                </div>
                </div>
            </div>
            </div>

        </section>
        
    )
}

export default CheckOut