import React from 'react';
import { Input } from 'reactstrap';
import _ from 'lodash';
import { searchData } from '../../redux/actions/searchAction';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          search: '',
        };
        this.searchData = _.debounce(this.searchData, 1000);
      }
        /**
   * @function
   *
   * getiing data from api call which we are doing in action
   *
   */

      searchData = () => {
        searchData(this.state.search,this.props.endpoint, this.props.target)
      };

        /**
   * @function
   * ChangeHandler function which is called on input
   *
   */
  changeHandler = (event) => {
    this.setState({ search: event.target.value });
    this.searchData();
  };

	render() {
		return (
			<div >
			    <Input
                    // onKeyDown={this.props.handleKeyDown}
                    onChange={this.changeHandler}
                    onKeyPress={this.props.submit}
                    placeholder='Type a query...'
                />
			</div> 
		)
	}
}

export default Search;