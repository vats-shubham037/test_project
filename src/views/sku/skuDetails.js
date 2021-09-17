/**
 * Importing external modules
 *
 */
 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 
 
 import { Container } from 'reactstrap';
 
 class SkuDetails extends Component {
   /**
    *
    * @returns jsx
    */
   render() {
     return (
       <Container>
        
           <div className='selecetdItem'>
             <p>
               <b>Selected Item</b>
             </p>
             sku_id: {this.props.selectedSku.sku_id}
             <br />
             sku_name: {this.props.selectedSku.sku_name}
             <br />
             product_code: {this.props.selectedSku.product_code}
             <br />
             barcode: {this.props.selectedSku.barcode}
             <br />
             stock_in: {this.props.selectedSku.stock_in}
             <br />
             stock_out: {this.props.selectedSku.stock_out}
             <br />
             stock_on_hand: {this.props.selectedSku.stock_on_hand}
             <br />
             stock_reserved: {this.props.selectedSku.stock_reserved}
             <br />
             stock_available: {this.props.selectedSku.stock_available}
             <br />
             modified_date: {this.props.selectedSku.modified_date}
             <br />
             created_date: {this.props.selectedSku.created_date}
             <br />
           </div>
       </Container>
     );
   }
 }
 
 const mapStateToProps = (state) => {
   const { selectedSku } = state.select;

   return { selectedSku };
 };
 
 export default connect(mapStateToProps, {})(SkuDetails);
 