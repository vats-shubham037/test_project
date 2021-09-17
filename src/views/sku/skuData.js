/**
 * Importing external modules
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Container, ListGroup, ListGroupItem } from 'reactstrap';

import { BeatLoader } from 'react-spinners';
import Search from '../../components/search/search'
import { selectData } from '../../redux/actions/selectAction';
import { history } from '../../app/AppRouter';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      cursor: 0,
      selectedValue: '',
    };
  }


  /**
   *
   * @function
   *
   * function to handle key
   */

  handleKeyDown(e) {
    console.log("i am clicked", e);
    const { cursor } = this.state;
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState((prevState) => ({
        cursor: prevState.cursor - 1,
      }));
    } else if (e.keyCode === 40 && cursor < this.props.data.length - 1) {
      this.setState((prevState) => ({
        cursor: prevState.cursor + 1,
      }));
    }
  }

  

  /**
   * submit functions being called after selecting any item
   *
   */
  submit = async (event) => {
   
      await selectData(this.props.data[this.state.cursor], "selectedSku");
      history.push(`/sku/${this.props.data[this.state.cursor]?.sku_id}`)
  
  };

  /**
   *
   * @returns jsx
   */
  render() {
    const { cursor } = this.state;
    return (
      <Container onKeyDownCapture={this.handleKeyDown}>
       <Search  submit={this.submit} endpoint="sku/search?sku_name" target="sku"/>
        <div className='list-item'>
          <ListGroup
         
          
          >
            {this.props.data &&
              this.props.data.map((item, i) => {
                return (
                  <ListGroupItem
                    key={item.sku_id}
                    className={cursor === i ? 'active focus' : null}
                    onMouseEnter={() => {
                      this.setState({ cursor: i });
                    }}
                    onKeyPress={this.submit}
                    // onMouseLeave={() => {
                    //   this.setState({ cursor: 0 });
                    // }}
                    // onKeyDown={this.handleKeyDown}
                    onClick={this.submit}
                  >
                    <div>{item.sku_name}</div>
                  </ListGroupItem>
                );
              })}
          </ListGroup>
          {this.props.error && <div className='center'>{this.props.error}</div>}
        </div>{' '}
        { this.props.loader && (
          <div className='center'>
            <BeatLoader
              className='clip-loader'
              sizeUnit={'px'}
              size={20}
              color={'#FF586B'}
              loading={this.props.loader}
            />
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, error } = state.search.sku;
  const { loader } = state.loader;
  return { data, error, loader };
};

export default connect(mapStateToProps, {})(Dashboard);
